import { type IContext } from "@/types/counterState"
import { createContext, useContext } from "react"

export const CounterContext = createContext<IContext | undefined>(undefined)
export const useCounter = () => {
    const context = useContext(CounterContext)
    if(!context)
        throw new Error(`Counter Context must be used inside Counter Provider`)
    return context
}
