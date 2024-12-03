type InputFieldType = {
    fieldName: string,
    type?: "text" | "date" | "time" | "password",
    onChange: (e: unknown) => void;
    placeholder?: string;
    label?: string,
    value: string,
    error?: unknown
}

const InputField = ({type = "text", fieldName, onChange, label, value, placeholder, error}: InputFieldType) => {

    return <>
        <label htmlFor={ fieldName }>{ label ? label?.toUpperCase() : fieldName.toUpperCase() }</label><br/>
        <input id={ fieldName } type={ type } name={ fieldName?.toLowerCase() } value={ value } onChange={ onChange }
               placeholder={ placeholder }/><br/>
        {error && <p style={{color: "red"}}>{ error }</p>}
    </>
}

export default InputField;