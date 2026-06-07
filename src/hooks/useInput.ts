import { useState, useCallback, useEffect, useRef } from "react"
import * as z from "zod"

/**
 * useInput - handle your state easily
 * @template {(val: T | ((val: T) => T)) => void}
 * @param {T} initial - initial value of input
 * @param {z.ZodType<T>} schema - schema value to validated input value 
 * @returns {readonly [input, handleSetInput]} - return input and handleSetInput 
 */
export const useInput = <T>(initial: T, schema?: z.ZodType<T>) => {
    const [input, setInput] = useState<T>(()=> {
        const validated = schema?.safeParse(initial)
        return validated?.success ? validated.data : initial
    })
    // Memorize schema at mounting
    const schemaRef = useRef<z.ZodType<T>>(schema)
    // Update schemaRef with last sync value after rerendering
    useEffect(()=> {
        schemaRef.current = schema
    }, [schema])

    const handleSetInput = useCallback( ( value: T | ((value: T) => T) ) => {
        setInput(prev => {
            const newVal = value instanceof Function ? value(prev) : value;
            const validated = schemaRef.current?.safeParse(newVal);
            return validated?.success ? validated.data : prev
        })
    }, [])

    return  [input, handleSetInput] as const
}