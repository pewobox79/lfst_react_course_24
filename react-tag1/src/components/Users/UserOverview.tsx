import {useEffect, useState} from "react";
import UserListItem from "./UserListItem.tsx";
import Loader from "../globals/Loader.tsx";
import {useFetch} from "../../hooks/useFetch.ts";

const UserOverview = () => {


    /*custom hook testing*/

    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/users');



    /*dynamic rendering component user*/
    const UserList = data?.map((user:{id:string})=>{

        return <UserListItem key={user.id} {...user}/>
    })

    return <div>
        <h3>user overview</h3>
        {error && <p>{error.msg}</p>}
        {loading && <Loader/>}
        {!loading && UserList}
    </div>
}

export default UserOverview