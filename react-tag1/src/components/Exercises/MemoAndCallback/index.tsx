import {useCallback, useState} from "react";
import {shuffle} from "../../../utils/shuffleHelper.ts";
import SearchElement from "./SearchElement.tsx";


const MemoAndCallback = () => {
    const allUsers = [
        "peter",
        "john",
        'paul',
        'max',
        'michael',
        'cengis'
    ]
    console.log("memo component")
    const [users, setUsers] = useState([])

    const handleSearch=useCallback((text:string)=> {
        const filteredUsers = allUsers.filter((user) => user.includes(text))
        setUsers(filteredUsers)
    }, [users])



    function handleShuffle() {
        const shuffledUsers = shuffle(allUsers)
        setUsers(shuffledUsers)

    }


const userListing = users.length === 0 ? allUsers : users
    const UserList = userListing.map((user) =>{
        return <li key={ user }>{ user }</li>
    })

    return <>
        <button onClick={ handleShuffle }>Shuffle</button><br/>
        <SearchElement onChange={ handleSearch }/>
        <ul>
            {UserList }
        </ul>
    </>
}

export default MemoAndCallback