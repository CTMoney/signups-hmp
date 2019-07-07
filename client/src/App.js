import React from 'react'
import API from './util/API'

const App = () => {

  const handleLogin = event => {
    event.preventDefault()
    API.loginRedirect()
    .then(res => {
      console.log(res)
    })
    .then(err => {
      if (err) console.log(err)
    })
  }

  return (
    <>
    <h1 id="technologyName">Discord OAuth</h1>
    <button id="loginBtn" onClick={handleLogin}><p id='loginBtnText'>Login With Discord</p></button>
    </>
  )
}

export default App
