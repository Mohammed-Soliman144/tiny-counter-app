interface IParagProps {
    classes: string,
    text?: string,
    children?: React.ReactNode,
}

export const MainParagraph = ({classes, text, children}: IParagProps) => {
    return <h1 className={classes}>
        {text}
        {children} 
    </h1>
}


