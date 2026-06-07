import { Button } from "@/components/ui/Button"
import { X } from "lucide-react"
import { useModalStore, type IModalStore } from "@/store/modalStore"
import modalStyles from "@/styles/modal.module.css"
import btnStyles from "@/styles/button.module.css"
import clsx from "clsx"

interface IModalProps extends React.ComponentPropsWithoutRef<'section'> {
    classes: string,
    children: React.ReactNode,
}
const setReset = (state: IModalStore) => state.setReset
const isResetOpenned = (state: IModalStore) => state.isResetOpenned
const setAnimated = (state: IModalStore) => state.setAnimated
const isAnimatedEnd = (state: IModalStore) => state.isAnimatedEnd
const setSettings = (state: IModalStore) => state.setSettings
const isSettingsOpenned = (state: IModalStore) => state.isSettingsOpenned
const setInfo = (state: IModalStore) => state.setInfo
const isInfoOpenned = (state: IModalStore) => state.isInfoOpenned

export const Modal = ({classes, children, ...rest}: IModalProps) => {
    const isOpenned = useModalStore(isResetOpenned)
    const changeReset = useModalStore(setReset)
    const changeAnimated = useModalStore(setAnimated)
    const isAnimated = useModalStore(isAnimatedEnd)
    const isSettingOpenned = useModalStore(isSettingsOpenned)
    const changeSetting = useModalStore(setSettings)
    const isInforOpenned = useModalStore(isInfoOpenned)
    const changeInfo = useModalStore(setInfo)
    
    return <section className={clsx(classes,modalStyles.modal, (isOpenned || isInforOpenned || isSettingOpenned) && !isAnimated? modalStyles.modalOpenned : (isOpenned || isInforOpenned || isSettingOpenned) && isAnimated? modalStyles.modalClosed : "")} {...rest} onAnimationEnd={(e: React.AnimationEvent) => {
            if(e.target !== e.currentTarget) return
            if(isAnimated) {
                if(isOpenned) changeReset()
                else if (isSettingOpenned) changeSetting()
                else if (isInforOpenned) changeInfo()
                changeAnimated()
            }
            // console.log("onAnimationEnd is executed")
        }}>
        {children}
        <Button classes={clsx(btnStyles.button, modalStyles.modalBtnClose)} onClick={() => changeAnimated()} >
            <X size={45} />
        </Button>
    </section>
}