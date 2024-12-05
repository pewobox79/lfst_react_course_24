import {useContext} from "react";
import {UserContext} from "../../../utils/context/userContext.ts";
import {Navigate} from "react-router";
import {useUserStore} from "../../../store/userStore.ts";

const LoginForm = () => {

    const zustandStore = useUserStore()
    console.log("zustandStore", zustandStore);

    const context = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        //set context value
        context?.setUserState(true)
        zustandStore.setDefaultValue()


    }


    return <>
        { context.userState ? <Navigate to={ "/admin" } replace/> : <form onSubmit={ handleSubmit }>
            <label htmlFor="identifier">Email oder Username:</label><br/>
            <input type="text" id="identifier" name="identifier"/><br/>
            <label htmlFor="password">Passwort:</label><br/>
            <input type="password" id="password" name="password"/><br/>
            <button type={ "submit" }>Login</button>
        </form> }</>
}

export default LoginForm;