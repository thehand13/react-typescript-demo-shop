import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux-hooks';
import { showLoginModal } from '../../store/ui-slice';

import classes from './AuthButton.module.css';

const AuthButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const authState = useAppSelector((state) => state.auth);
  const loginHandler = () => {
    dispatch(showLoginModal());
  };
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
