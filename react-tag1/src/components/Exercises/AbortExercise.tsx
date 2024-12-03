import {useState} from "react";
import styles from "../../styles/Users.module.css"

const AbortExercise = () => {


    const [userId, setUserId] = useState("");
    const [selected, setSelected] = useState({name: "", phone: "", website: ""});


    return <div>


        <div className={styles.button} onClick={ () => setUserId("1") } style={ {border: "1px solid green", margin: "10px", padding: 10,} }>User
            1
        </div>
        <div className={styles.button} onClick={ () => setUserId("1") } style={ {border: "1px solid green", margin: "10px", padding: 10,} }>User
            2
        </div>
        <div className={styles.button} onClick={ () => setUserId("1") } style={ {border: "1px solid green", margin: "10px", padding: 10,} }>User
            3
        </div>
        <div className={styles.button} onClick={ () => setUserId("1") } style={ {border: "1px solid green", margin: "10px", padding: 10,} }>User
            4
        </div>

        { selected.name && <div>

          <h3>{ selected.name }</h3>
          <p>phone: { selected.phone }</p>
          <p>website { selected.website }</p>
        </div> }
    </div>
}

export default AbortExercise;