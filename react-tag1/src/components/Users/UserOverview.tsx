import {useEffect, useState} from "react";
import UserListItem from "./UserListItem.tsx";
import Loader from "../globals/Loader.tsx";

const UserOverview = () => {

    const [users, setUsers] = useState([]);

    /*weniger state nutzen, sonst wird es unübersichtlich*/
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    /*bessere variante um user feedback zu setzen*/
    const [state, setState] = useState<"loading" | "error" | "success">("loading");

    useEffect(() => {


        async function getUser() {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();

                setTimeout(()=>{
                    setUsers(data);
                    setState("success")
                }, 2000)

            } catch (e) {
                console.error("fetch failed", e)

                setState("error")

            }

        }

        getUser();

    }, [])


    /*dynamic rendering component user*/
    const UserList = users?.map((user:{id:string})=>{

        return <UserListItem key={user.id} {...user}/>
    })

    return <div>
        <h3>user overview</h3>
        {state === "error" && <p>Error happend</p>}
        {state === "loading" && <Loader/>}
        {state === "success" && UserList}
    </div>
}

export default UserOverview