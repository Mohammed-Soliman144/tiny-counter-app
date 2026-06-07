import { MainHeading } from "../ui/MainHeading"
import { MainParagraph } from "../ui/MainParagraph"
import styles from "@/styles/intro.module.css"
import { useModalStore, type IModalStore } from "@/store/modalStore"

const resetAnimated = (state: IModalStore) => state.setAnimated
const isIntro = (state: IModalStore) => state.isIntroOpenned
const changeIntro = (state: IModalStore) => state.setIntro
const isAnimationEnd = (state: IModalStore) => state.isAnimatedEnd

export const Intro = () => {
    const changeAnimated = useModalStore(resetAnimated)
    const setIntro = useModalStore(changeIntro)
    const isIntroOpenned = useModalStore(isIntro)
    const isAnimatedEnd = useModalStore(isAnimationEnd)

    return <section className={`${styles.intro}`} onAnimationEnd={(e: React.AnimationEvent) => {
            // ensures that onAnimationEnd event fires from parent section not from h2 or p (has other animations)
            // also onAnimationEnd or onTransitionEnd fires at first animation finished 
            // e.currentTarget refer to onAnimationEnd event fires from parent not from child
            if(e.target !== e.currentTarget) return
            if(e.animationName !== "fade-right") return 
            if(!isIntroOpenned) return
            if(isAnimatedEnd) {
                setIntro()
                changeAnimated()
            }
    }}>
        <MainHeading classes={styles.mainHeading} text="simple counter" headType="h1"/>
        <MainParagraph classes={styles.mainParag} text="a simple tool for counting thinngs and keeping track of numbers.">
            <abbr title="Github Repositories">Repos</abbr>
        </MainParagraph>
    </section>
}