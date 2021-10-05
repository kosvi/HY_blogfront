import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import Login from './components/Login'
import ErrorMessage from './components/ErrorMessage'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage('learn to type!')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  if (user === null) {
    return (
      <div>
        {
          errorMessage !== null && <ErrorMessage message={errorMessage} />
        }
        <h2>log in to application</h2>
        <Login
          user={username}
          pwd={password}
          setUser={setUsername}
          setPwd={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    )
  }
  if (user !== null) {
    return (
      <div>
        {
          errorMessage !== null && <ErrorMessage message={errorMessage} />
        }
        <h2>blogs</h2>
        logged in as {user.name} <br /><br />
        <Blogs blogs={blogs} />
      </div>
    )
  }
}

export default App