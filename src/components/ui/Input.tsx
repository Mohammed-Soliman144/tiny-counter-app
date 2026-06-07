interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
    classes: string,
    type: "radio" | "checkbox" | "text" | "number",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({classes, type, onChange, ...rest}: IInputProps) => {
    return <input type={type} className={`input ${classes}`} onChange={onChange} {...rest} />
}