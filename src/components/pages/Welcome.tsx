import { MainHeading } from "@/components/ui/MainHeading"
import { MainParagraph } from "@/components/ui/MainParagraph"
import { Link } from "@/components/ui/Link"
import { Modal } from "@/components/ui/Modal"
import { Heart } from "lucide-react"
import styles from "@/styles/welcome.module.css"

export const Welcome = () => {
    return <Modal classes={`hero-section container ${styles.hero}`}>
        <MainHeading classes={styles.mainHeading} text="simple counter" headType="h1"/>
        <MainParagraph classes={styles.mainParag} text="a simple tool for counting thinngs and keeping track of numbers.">
            <abbr title="Github Repositories">Repos</abbr>
        </MainParagraph>
        <Link classes={`${styles.specialLink}`} href="https://github.com/Mohammed-Soliman144" text="" >
            <span>go to repos</span>
            <Heart size={32} />
        </Link>
        <MainParagraph classes={styles.mainParag}>
            <span>created by <abbr title="Muhammed Soliman">MS</abbr></span>
        </MainParagraph>
        <MainParagraph classes={styles.mainParag}>
            please check out my latest repos.
        </MainParagraph>
        <Link classes={styles.link} href="https://muhammed-soliman-portfolio.vercel.app/" text="my portfolio" />
    </Modal>
}