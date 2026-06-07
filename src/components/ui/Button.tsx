interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    classes: string,
    children: React.ReactNode,
}

export const Button = ({classes, children, ...rest}: IButtonProps) => {
    return <button className={`${classes}`} {...rest}>
        {children}
    </button>
}