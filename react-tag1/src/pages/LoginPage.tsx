import RegisterForm from "../components/Forms/RegisterForm";
import LoginForm from "../components/Forms/LoginForm";
import {useContext, useState} from "react";
import {UserContext} from "../utils/context/userContext.ts";
import {Navigate} from "react-router";

const LoginPage = () => {

    const [state, setState] = useState(false)
    const context = useContext(UserContext);
    console.log("context state", context)

    function handleStateChange() {
        setState(!state)
    }



    return <>

        <h3>Login page</h3>


        { state ? <div>
            <div onClick={ handleStateChange }>Zum Registrieren</div>
        </div> : <div>Bereits angemeldet? <div onClick={ handleStateChange }>hier zum login!</div></div> }
        { state ? <LoginForm/> : <RegisterForm/> }

    </>
}

export default LoginPage