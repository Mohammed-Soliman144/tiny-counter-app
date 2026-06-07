import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { useInput } from "@/hooks/useInput"
import { counterSchema, type TTheme } from "@/types/counterState"
import { useCounter } from "@/hooks/useCounter"
import { Modal } from "@/components/ui/Modal"
import * as z from "zod"
import styles from "@/styles/settings.module.css"

const countSchema = counterSchema.omit({
    perferredColor: true,
    maxCounter: true,
    isLimit: true,
    theme: true
})
const maxCounterSchema = counterSchema.omit({
    perferredColor: true,
    counter: true,
    isLimit: true,
    theme: true
})
const isLimitSchema = counterSchema.omit({
    perferredColor: true,
    maxCounter: true,
    counter: true,
    theme: true
})
const themeSchema = counterSchema.omit({
    perferredColor: true,
    maxCounter: true,
    isLimit: true,
    counter: true
})

export const Settings = () => {
    const {setCounter, setMaxCounter, isLimit, toggleIsLimit, setTheme, theme, counter, maxCounter} = useCounter()
    // const [count, setCount] = useState<number>(counter)
    const [count, setCount] = useInput<z.infer<typeof countSchema>>({counter: counter}, countSchema)
    const [maxCount, setMaxCount] = useInput<z.infer<typeof maxCounterSchema>>({maxCounter: maxCounter}, maxCounterSchema)
    const [limit, setLimit] = useInput<z.infer<typeof isLimitSchema>>({isLimit: isLimit}, isLimitSchema)
    const [themeInput, setThemeInput] = useInput<{theme: string}>({theme: theme}, themeSchema)
    

    const colorRadios = [
        "dark-pink", "medium-orchid", "blue-violet","slate-gray",    
        "dark-turquoise", "sea-green", "royal-blue", "dark-blue", 
        "sky-blue", "steel-blue", "black", "white"
    ] 

    return <Modal classes={styles.modal} >
        <form action="" className={styles.formSettings}>
            <div className={styles.formControls}>
                <Label id="count" classes="" text="set count = " />
                <Input 
                    classes={""} 
                    type="text" 
                    value={count.counter}
                    id="count"
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            setCount(
                                prev => ({
                                    ...prev,
                                    counter: Number.isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value) 
                                })
                            )
                            setCounter(Number.isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))
                        }}
                    />
            </div>
            <div className={styles.formControls}>
                <Label id="limit" classes="" text="Limits ">
                    <span style={{
                        textDecoration: limit.isLimit?  "none" : "underline"
                    }}>off</span> / <span style={{
                        textDecoration: limit.isLimit?  "underline" : "none"
                    }}>on</span>
                </Label>
                <Input 
                id="limit" 
                type="checkbox"
                name="limit" 
                classes={styles.specialInputRadio}
                checked={limit.isLimit} 
                onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => { 
                        setLimit(prev => ({
                            ...prev,
                            isLimit: e.target.checked
                        }))
                        toggleIsLimit()
                    }}/>
                {
                    limit.isLimit &&
                    <div className={styles.formControls}>
                        <Label id="max-counter" classes="" text="maximum = " />
                        <Input type="number" id="max-counter" classes="" 
                        value={maxCount.maxCounter} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setMaxCount(prev => ({...prev, maxCounter: Number.isNaN(parseInt(e.target.value))? 0 : parseInt(e.target.value)}))
                            setMaxCounter(Number.isNaN(parseInt(e.target.value))? 0 : parseInt(e.target.value))
                        }} />
                    </div>
                }
            </div>
            <div className={styles.formControls}>
                {
                    colorRadios.map((inpt) => {
                        return (
                            <Input
                                key={inpt}
                                id={inpt} 
                                name="theme" 
                                type="radio"
                                style={{
                                    backgroundColor: `var(--color-${inpt})`,
                                    border: inpt === "white"? "calc(var(--border-sm) * 0.25) solid var(--color-black)" : inpt === "black" ? "calc(var(--border-sm) * 0.25) solid var(--color-white)" : ""
                                }}    
                                classes={styles.inputRadio}
                                value={inpt}
                                checked={themeInput.theme === inpt}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setThemeInput(prev => ({...prev, theme: inpt === e.target.value? inpt : prev.theme}))
                                    setTheme(
                                        e.target.value === "black"? "DARK" : e.target.value  === "white" ? "LIGHT" : e.target.value.toUpperCase() as TTheme
                                    )
                                }}
                            />
                        )
                    })
                }
            </div>
        </form>
    </Modal>
}
