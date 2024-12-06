import {memo} from "react";

const Comp2=({state})=>{

    console.log("comp2 rerender", state)
    return <h1>comp 2</h1>
}

export default memo(Comp2)