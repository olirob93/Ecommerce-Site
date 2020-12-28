import React, { useState } from "react";
import styles from "./SignIn.styles.scss";

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  }

  

  return (
    <div className='sign-in'>
      <h2>I already have an account
        <span>Sign in with you email and password</span>
      </h2>

      <form onSubmit={handleSubmit} action="">
        <input name='email' value={email} type='email' onChange={(e) => setEmail(e.target.value)} required />{(e) => setEmail(e.target.value)}
        <label> Email</label>
        <input name='password' value={password} type='password' onChange={(e) => setPassword(e.target.value)} required />
        <label>Password</label>

        <input type='submit' value='Submit form'/>
      </form>
    </div>
  );
};

export default SignIn;
