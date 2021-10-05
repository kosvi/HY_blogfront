import React from "react"

const Login = ({ user, pwd, setUser, setPwd, handleLogin }) => (
    <div>
        <form onSubmit={handleLogin}>
            Username
            <input type="text" value={user} name="Username" onChange={({ target }) => setUser(target.value)} /> <br />
            Password
            <input type="password" value={pwd} name="Password" onChange={({ target }) => setPwd(target.value)} /> <br />
            <button >login</button>
        </form>
    </div>
)

export default Login
