import { Plus, Minus } from "lucide-react"
import { useCounter } from "@/hooks/useCounter"
import { Button  } from "@/components/ui/Button"
import { Footer } from "@/components/layouts/Footer"
import counterStyles from "@/styles/counter.module.css"
import btnStyles from "@/styles/button.module.css"
import clsx from "clsx"

export const Counter = () => {
    const {counter, increment , decrement} = useCounter()
    
    const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        increment()
    }
    const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        decrement()
    }
    return <section className={counterStyles.counter}>
        <h2 className={counterStyles.mainHeading}>{counter}</h2>
        <Button classes={clsx(btnStyles.button, counterStyles.btnCounter)} onClick={handleIncrement}>
            <Plus size={35} />
        </Button>        
        <Button classes={clsx(btnStyles.button, counterStyles.btnCounter)}
            style={{
                visibility: counter > 0 ? "visible" : "hidden",
            }}
            onClick={handleDecrement}>
                <Minus size={35} />    
            </Button> 
        <Footer />    
    </section>
}
