import React, { useState } from "react";
import styles from "./SignIn.styles.scss";
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { signInWithGoogle } from '../../Firebase/firebase.utils';

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
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit} action="">
        <FormInput
          name='email'
          value={email}
          type='email'
          handleChange={(e) => setEmail(e.target.value)}
          label='Email'
          required
          />
        <FormInput
          name='password'
          value={password}
          type='password'
          handleChange={(e) => setPassword(e.target.value)}
          label='Password'
          required
          />
        <div className='buttons'>
          <CustomButton type='submit'> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with google </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
