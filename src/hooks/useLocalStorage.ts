import * as z from "zod"
import {useState, useCallback, useEffect, useRef} from "react"

/**
 * useLocalStorage - persist your state in localStorage
 * @template T
 * @param {string} key - key of localStorage
 * @param {T} initial - initialValue of localStorage as generic type 
 * @param {z.ZodType<T>} schema - zod schema to validate value set or get from localStorage 
 * @returns {readonly [T, (val: T | ((val: T) => T)) => void]} - return [storage, handleSetStorage] as const
 */
export const useLocalStorage =<T>(key: string, initial: T, schema: z.ZodType<T>) => {
    // Reading from localstorage with lazy initialization
    const [storage, setStorage] = useState<T>(()=> {
        if(typeof window === "undefined") return initial
        try {
            const item = localStorage.getItem(key)
            if(!item) {
                localStorage.setItem(key, JSON.stringify(initial))
                return initial
            }
            const validated = schema.safeParse(JSON.parse(item))
            return validated.success ? validated.data : initial
        } catch(err) {
            console.error(`Localstorage reading key: ${key} - error: ${err instanceof Error && err.message || err}`)
            return initial
        }
    })

    // Memorize schema at mounting by useRef
    const schemaRef = useRef<z.ZodType<T>>(schema)
    // Update schemaRef with latest syncrohous value after rerendering when schema changed
    useEffect(()=> {
        schemaRef.current = schema
    }, [schema])

    // Memorize SetStorage with useCallback
    const handleSetStorage = useCallback(( val: T | ((val: T) => T) )=> {
        setStorage(prev => {
            const newVal = val instanceof Function? val(prev) : val
            const validated = schemaRef.current.safeParse(newVal)
            return validated.success ? validated.data : prev
        })
    }, [])

    // update localStorage after rerendering in current tab (Writing LocalStorage)
    useEffect(()=> {
        if(typeof window === "undefined") return
        try {
            const validated = schemaRef.current.safeParse(storage)
            if(!validated.success) return
            localStorage.setItem(key, JSON.stringify(validated.data))
        } catch(err) {
            console.error(`LocalStorage writing key: ${key} - error: ${err instanceof Error && err.message || err}`)
        }
    }, [key, storage])

    // update localStorage after rerender in multi tabs (async writing)
    useEffect(()=> {
        const handleSavedStorage = (e: StorageEvent) => {
            if(typeof window === "undefined") return
            if(e.key === key && e.newValue) {
                const parsed = JSON.parse(e.newValue)
                const validated = schemaRef.current.safeParse(parsed)
                setStorage(prev => validated.success? validated.data : prev)
            }
        } 
        window.addEventListener("storage", handleSavedStorage)
        return () => window.removeEventListener("storage", handleSavedStorage)
    }, [key])

    return [storage, handleSetStorage] as const
}

