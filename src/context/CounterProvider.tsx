import { 
    type ICounterStorage, 
    type TTheme,
    counterSchema, 
    DEFAULT_THEME } from "@/types/counterState"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CounterContext } from "@/hooks/useCounter"



export const CounterProvider = ({children}: {children: React.ReactNode}) => {
    const [storage, setStorage] = useLocalStorage<ICounterStorage>("simple-counter-app", {
        counter: 0,
        isLimit: false,
        maxCounter: 20,
        perferredColor: "",
        theme: DEFAULT_THEME,
    }, counterSchema)

    const setCounter = (num: number) => {
        setStorage(prev => ({...prev, counter: num}))
    }

    const setMaxCounter = (max: number) => {
        setStorage(prev => ({...prev, maxCounter: max}))
    }

    const toggleTheme = () => 
        setStorage(prev => ({...prev, theme: prev.theme === "LIGHT" ? "DARK" : "LIGHT"}))

    const setTheme = (theme: TTheme) => 
        setStorage(prev => ({...prev, theme: theme}))

    const setColor = (color: string) => 
        setStorage(prev => ({...prev, perferredColor: color}))

    const toggleIsLimit = () => 
        setStorage(prev => ({...prev, isLimit: prev.isLimit? false : true }))

    const increment = () =>
        setStorage(prev => ({...prev, counter: prev.counter + 1}))

    const decrement = () => 
        setStorage(prev => ({...prev, counter: prev.counter - 1}))

    const {counter, maxCounter, theme, isLimit, perferredColor} = storage
    const values = {
        counter,
        setCounter,
        maxCounter,
        setMaxCounter,
        increment,
        decrement,
        theme,
        toggleTheme,
        setTheme,
        isLimit,
        toggleIsLimit,
        perferredColor,
        setColor,
    }
    return <CounterContext.Provider value={values}>
        {children}
    </CounterContext.Provider>
}

