import { useCounter } from "@/hooks/useCounter"
import { useEffect, useRef } from "react"
import styles from "@/styles/footer.module.css"

export const Footer = () => {
    const {isLimit, maxCounter, counter} = useCounter()
    const remainder = maxCounter - counter
    const isAnimated = remainder <= 0;
    const targetElement = useRef<HTMLParagraphElement>(null)
    useEffect(()=> {
        if(targetElement.current === null) return
        if(isAnimated) {
            targetElement.current.classList.remove(styles.animatedFlash)
            targetElement.current.classList.add(styles.animatedFlash)
        } else {
            targetElement.current.classList.remove(styles.animatedFlash)
        }
    }, [isAnimated])
    return isLimit && <footer className={styles.footer}>
        <h2 className={styles.mainHeading}>{remainder}</h2>
        <p ref={targetElement} className={styles.mainParagraph}>
            {isAnimated ? "limit reach" : "available"}
        </p>
    </footer>
}