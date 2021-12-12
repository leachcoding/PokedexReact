import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <>
      <form class="loginForm">
        <input type="email" placeholder="Please enter email to login and see your backpack"></input>
        <input type="password" placeholder="Please enter password"></input>
        <button type="submit">Submit</button>
        <p>Not a member? <Link to={'/register'}>Sign Up</Link></p>
      </form>
    </>
  );
}

export default Login;
