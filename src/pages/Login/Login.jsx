import React from "react";
import styles from "./Login.styles.scss";
import SignIn from '../../components/SignIn';
import SignUp from "../../components/SignUp/SignUp";

const Login = () => {
  return (
  <div className='login'>
    <SignIn/>
    <SignUp/>
  </div>
  );
};

export default Login;
