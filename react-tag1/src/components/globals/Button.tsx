type ButtonTypes = {
    action: () => void,
    label?: string,
    style?: React.CSSProperties,
    className: "small" | "medium" | "large",
}

const Button = ({action, className, label = "Click mich", style}: ButtonTypes) => {

    
    return <button
        onClick={ action }
        style={ style }
        className={ className }>{ label }</button>
}
export default Button