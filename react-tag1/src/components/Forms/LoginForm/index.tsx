const LoginForm=()=>{

    return <form>
        <label htmlFor="identifier">Email oder Username:</label><br/>
        <input type="text" id="identifier" name="identifier"/><br/>
        <label htmlFor="password">Passwort:</label><br/>
        <input type="password" id="password" name="password"/><br/>
        <button type={"submit"}>Login</button>
    </form>
}

export default LoginForm;