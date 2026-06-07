interface ILinkProps {
    text: string,
    href: string,
    classes: string,
    children?: React.ReactNode,
}

export const Link = ({text, href, classes, children}: ILinkProps) => {
    return <a href={href} className={classes}>
        {text}
        {children}
    </a>
}