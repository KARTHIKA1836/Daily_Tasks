import React from 'react'

function Signup() {
  return (
    <div>
      <div className='login-container'>
        <h1>Signup here</h1>
        <h3>Name :</h3>
        <input type="text" placeholder="name"/>
        <h3>Email :</h3>
        <input type="email" placeholder="email"/>
        <h3>Password :</h3>
        <input type="password" placeholder="password"/>
        <h3>Confirm Password :</h3>
        <input type="password" placeholder="confirm password"/>
        <br/>
        <button type="submit">Signup</button>
    </div>
    </div>
  )
}

export default Signup
