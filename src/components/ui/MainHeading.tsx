interface IHeadingProps {
    headType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    classes: string,
    text?: string,
    children?: React.ReactNode,
}

export const MainHeading = ({headType, classes, text, children}: IHeadingProps) => {
    switch(headType) {
        case "h1":
            return <h1 className={classes}>
                {text}
                {children} 
            </h1>
        case "h2":
            return <h2 className={classes}>
                {text}
                {children} 
            </h2>
        case "h3":
            return <h3 className={classes}>
                {text}
                {children} 
            </h3>
        case "h4":
            return <h4 className={classes}>
                {text}
                {children} 
            </h4>
        case "h5":
            return <h5 className={classes}>
                {text}
                {children} 
            </h5>
        case "h6":
            return <h6 className={classes}>
                {text}
                {children} 
            </h6>
        default:
            return <h1 className={classes}>
                {text}
                {children} 
            </h1>
    }
}


