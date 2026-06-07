import * as z from "zod"

export const counterSchema = z.object({
    counter: z.number().nonnegative("Counter can not be negative number").default(0),
    isLimit: z.boolean().default(true),
    maxCounter: z.number().min(0, "Max counter can not be negative number").default(20),
    perferredColor: z.string().default(""),
    theme: z.enum(["LIGHT", "DARK",'DARK-PINK', 'MEDIUM-ORCHID', 'BLUE-VIOLET', 'SLATE-GRAY', 'DARK-TURQUOISE', 'SEA-GREEN', 'ROYAL-BLUE', 'DARK-BLUE', 'SKY-BLUE', 'STEEL-BLUE']).default("LIGHT")
})

export interface ICounterStorage {
    /* All below is local states persist in localStorage not actions */
    counter: number,
    isLimit: boolean,
    maxCounter: number,
    perferredColor: string,
    theme: 
        "LIGHT" | "DARK" | 'DARK-PINK' | 'MEDIUM-ORCHID' | 'BLUE-VIOLET' | 'SLATE-GRAY' | 'DARK-TURQUOISE' | 'SEA-GREEN' | 'ROYAL-BLUE' | 'DARK-BLUE' | 'SKY-BLUE' | 'STEEL-BLUE'
}

/* Context Types */
export const DEFAULT_THEME = "LIGHT"
export type TTheme = "LIGHT" | "DARK" | 'DARK-PINK' | 'MEDIUM-ORCHID' | 'BLUE-VIOLET' | 'SLATE-GRAY' | 'DARK-TURQUOISE' | 'SEA-GREEN' | 'ROYAL-BLUE' | 'DARK-BLUE' | 'SKY-BLUE' | 'STEEL-BLUE'
export interface IContext {
    theme: TTheme,
    toggleTheme: () => void,
    setTheme: (theme: TTheme) => void,
    counter: number,
    isLimit: boolean,
    toggleIsLimit: () => void,
    maxCounter: number,
    setCounter: (num: number) => void,
    setMaxCounter: (num: number) => void,
    increment: () => void,
    decrement: () => void,
    perferredColor: string,
    setColor: (color: string) => void
}