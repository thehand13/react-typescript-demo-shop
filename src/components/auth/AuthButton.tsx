import React from 'react';
import { useAppSelector } from '../../hooks/react-redux-hooks';

import classes from './AuthButton.module.css';

const AuthButton: React.FC = () => {
  const authState = useAppSelector((state) => state.auth);
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <>
      {!authState.loggedIn && (
        <button className={classes[`auth-button`]} onClick={loginHandler}>
          Login
        </button>
      )}
      {authState.loggedIn && (
        <button className={classes[`auth-button`]} onClick={logoutHandler}>
          Logout
        </button>
      )}
    </>
  );
};

export default AuthButton;
