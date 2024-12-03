import Button from "../components/globals/Button.tsx";
import {useState} from "react";

const Homepage = () => {

    const [value, setValue] = useState(1)
    function handleClick() {
        setValue(value +1)
    }

    return <>
        <h1>Homepage</h1>
        <h3>{value}</h3>
        <Button
            action={ handleClick }
            style={ {backgroundColor: "green", border: "3px solid red", fontSize: "3rem"} }
            label={ "neues label" }
            className={ "small" }/>
    </>

}

export default Homepage;