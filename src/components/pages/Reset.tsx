import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/Button"
import { useCounter } from "@/hooks/useCounter"
import { useModalStore, type IModalStore } from "@/store/modalStore"
import resetStyles from "@/styles/reset.module.css"
import btnStyles from "@/styles/button.module.css"
import clsx from "clsx"


const setReset = (state: IModalStore) => state.setReset
const isAnimated = (state: IModalStore) => state.isAnimatedEnd
const setAnimated = (state: IModalStore) => state.setAnimated

export const Reset = () => {
    const {setCounter} = useCounter()
    const setIsReset = useModalStore(setReset)
    const isAnimatedEnd = useModalStore(isAnimated)
    const changeAnimated = useModalStore(setAnimated)

    const handleAnimationEnd = ()=> {
        if(isAnimatedEnd) {
            setIsReset()
            changeAnimated()
        }
    }
    const handleSetCounter = () => {
        setCounter(0)
        changeAnimated()
    }
    return <Modal classes="" onAnimationEnd={handleAnimationEnd}>
        <h2 className={resetStyles.mainHeading}>reset counter?</h2>
        <div className={resetStyles.btnControls}>
            <Button classes={clsx(btnStyles.button, resetStyles.btnSpecial)} onClick={handleSetCounter}>
                <span>yes</span>
            </Button>
            <Button classes={clsx(btnStyles.button, resetStyles.btnSpecial)} onClick={() => changeAnimated()}>
                <span>cancel</span>
            </Button>
        </div>
    </Modal>
}


