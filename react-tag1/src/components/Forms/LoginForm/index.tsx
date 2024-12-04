import {useContext} from "react";
import {UserContext} from "../../../utils/context/userContext.ts";
import {Navigate, useNavigate} from "react-router";

const LoginForm=()=>{

    const context = useContext(UserContext);

    function handleSubmit(e){
        e.preventDefault();
        //set context value
        context?.setUserState(true)


    }


    return <>
        { context.userState ? <Navigate to={"/admin"} replace/> : <form onSubmit={ handleSubmit }>
            <label htmlFor="identifier">Email oder Username:</label><br/>
            <input type="text" id="identifier" name="identifier"/><br/>
            <label htmlFor="password">Passwort:</label><br/>
            <input type="password" id="password" name="password"/><br/>
            <button type={ "submit" }>Login</button>
        </form>}</>
        }

        export default LoginForm;