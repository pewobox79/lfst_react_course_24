import {useEffect, useState} from "react";

const EffectExercise =()=>{


    const [counter, setCounter] =useState(1);

    useEffect(()=>{

        console.log("effect runs")
       const interval = setInterval(()=>{

            setCounter(prev => prev +1)
        }, 1000)

        return ()=>{
            console.log("cleanup")
            clearInterval(interval)
        }


    }, [counter])

    return <>

    <h2>Effect Exercise</h2>
        <h3>{counter}</h3>
        <div onClick={()=>setCounter(counter+1)}>click</div>


    </>
}

export default EffectExercise