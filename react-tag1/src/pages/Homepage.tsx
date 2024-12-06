import Button from "../components/globals/Button.tsx";
import {useState} from "react";
import {shuffle} from "../utils/shuffleHelper.ts";
import ReRenderExercise from "../components/Exercises/ReRenderExercise";
import Comp1 from "../components/Exercises/ReRenderExercise/Comp1.tsx";

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

        <ReRenderExercise>
            <Comp1/>
        </ReRenderExercise>
    </>

}

export default Homepage;