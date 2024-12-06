import Comp1 from "./Comp1.tsx";
import Comp2 from "./Comp2.tsx";
import Comp3 from "./Comp3.tsx";
import {useState} from "react";

const ReRenderExercise = ({children}) => {
    const [state, setState] = useState(false)

    console.log("rendender comp")
    return <div>
        <h2>Re-Renderender Exercise</h2>
        <button onClick={ () => setState(!state) }>change</button>
        {children}
        <Comp2 state={state}/>
        <Comp3/>
    </div>
}

export default ReRenderExercise