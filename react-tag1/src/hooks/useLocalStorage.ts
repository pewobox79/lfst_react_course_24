import {useState} from "react";

export function useLocalStorage(key: string) {


    //check ob storage vorhanden => wert speichern
    const [value, setValue] = useState(() => {
        //prüfung ob Item mit key existiert
        const storedValue = typeof window != undefined ? window.localStorage.getItem(key) : undefined;

        //Rückgabe des Wertes aus Item oder null
        return storedValue ? JSON.parse(storedValue) : null

    })

    //setzen eines neuen Wertes
    const setStoredValue = (newValue: unknown) => {
        setValue(newValue)
        window.localStorage.setItem(key, JSON.stringify(newValue))

    }

    const deleteLocalStorage=()=>{
        setValue(null)
        window.localStorage.removeItem(key)
    }

    return {value, setStoredValue, deleteLocalStorage}

}

