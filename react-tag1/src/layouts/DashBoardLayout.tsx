import {Navigate, Outlet} from "react-router";
import {useContext} from "react";
import {UserContext} from "../utils/context/userContext.ts";

const DashBoardLayout=()=>{

    const context = useContext(UserContext)

    if(!context.userState){
        return <Navigate to={"/login" } replace/>
    }

    return <>
        <h2>Dashboard layout</h2>

        <main>
            <Outlet/>
        </main>
    </>
}

export default DashBoardLayout;