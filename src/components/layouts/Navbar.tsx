import { Settings, Info, RotateCcwIcon, Moon, Sun } from "lucide-react"
import { useCounter } from "@/hooks/useCounter"
import { Button } from "@/components/ui/Button"
import { useModalStore, type IModalStore } from "@/store/modalStore"
import { useEffect } from "react"
import clsx from "clsx"
import styles from "@/styles/navbar.module.css"


/* Pure logic must be call outside function component as reducer */
const setReset = (state: IModalStore) => state.setReset
const setInfo = (state: IModalStore) => state.setInfo
const setSettings = (state: IModalStore) => state.setSettings

export const Navbar = () => {
    const setIsReset = useModalStore(setReset)
    const setIsInfo = useModalStore(setInfo)
    const setIsSettings = useModalStore(setSettings)

    const {theme, toggleTheme} = useCounter()
    const isToggle = theme === "DARK"
    const darkClass = isToggle ? styles.toggleDark : ""

    useEffect(()=> {
        const rootElement = document.documentElement
        
        if(isToggle) {
            rootElement.dataset.theme = "light"
        } else {
            rootElement.dataset.theme = "dark"
        }
    }, [isToggle])
    return <nav className="navbar-controls" aria-label="navbar-controls">
        <ul className={`${styles.navbarMenu}`}>
            <li>
                <Button classes={`${styles.btnNavigation}`} onClick={() => setIsSettings()}>
                    <Settings size={35}/>
                </Button>
            </li>
            <li>
                <Button classes={`${styles.btnNavigation}`}onClick={() => setIsInfo()}>
                    <Info size={35}/>
                </Button>
            </li>
            <li>
                <Button classes={`${styles.btnNavigation}`} onClick={() => setIsReset()} >
                    <RotateCcwIcon size={35}/>
                </Button>
            </li>
            <li>
                <Button classes={`${clsx(styles.btnNavigation, styles.btnToggle, darkClass)}`} 
                    onClick={toggleTheme}>
                    { theme === "LIGHT" ? <Moon size={35} /> : <Sun size={35} /> }
                </Button>
            </li>    
        </ul>
    </nav>
}
