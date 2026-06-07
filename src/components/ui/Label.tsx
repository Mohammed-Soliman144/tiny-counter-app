interface ILabelProps extends React.ComponentPropsWithoutRef<'label'> {
    classes: string,
    id: string
    text: string,
    children?: React.ReactNode;
}
export const Label = ({classes, id, text = "", children}: ILabelProps) => {
    return <label className={`${classes}`} htmlFor={id}>
        { text } 
        { children }
    </label>
}