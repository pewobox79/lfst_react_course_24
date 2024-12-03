import RegisterForm from "../components/Forms/RegisterForm";
import LoginForm from "../components/Forms/LoginForm";
import {useState} from "react";

const LoginPage = () => {

    const [state, setState] = useState(false)

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