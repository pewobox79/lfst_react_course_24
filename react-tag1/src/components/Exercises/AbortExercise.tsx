import {useEffect, useState} from "react";
import styles from "../../styles/Users.module.css"

const AbortExercise = () => {


    const [userId, setUserId] = useState("1");

    const [selected, setSelected] = useState({name: "", phone: "", website: ""});


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {signal: signal})
            .then((response) => response.json())
            .then((data)=> setSelected(data))

        return ()=>{
            console.log("cleanup")
            controller.abort()
        }


    }, [userId])


    console.log("userid", userId)


    return <div>


        <div className={ styles.button } onClick={ () => setUserId("1") }
             style={ {border: "1px solid green", margin: "10px", padding: 10,} }>
            User 1
        </div>
        <div className={ styles.button } onClick={ () => setUserId("2") }
             style={ {border: "1px solid green", margin: "10px", padding: 10,} }>
            User 2
        </div>
        <div className={ styles.button } onClick={ () => setUserId("3") }
             style={ {border: "1px solid green", margin: "10px", padding: 10,} }>
            User 3
        </div>
        <div className={ styles.button } onClick={ () => setUserId("4") }
             style={ {border: "1px solid green", margin: "10px", padding: 10,} }>
            User 4
        </div>

        { selected.name && <div>

          <h3>{ selected.name }</h3>
          <p>phone: { selected.phone }</p>
          <p>website { selected.website }</p>
        </div> }
    </div>
}

export default AbortExercise;