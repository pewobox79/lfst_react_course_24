import {Outlet} from "react-router";
import {useState} from "react";
import {UserContext} from "../utils/context/userContext.ts";

const ContextLayout = () => {


    const [userState, setUserState] = useState(false);


    return <UserContext.Provider value={ {userState, setUserState} }>
        <Outlet/>
    </UserContext.Provider>
}
export default ContextLayout