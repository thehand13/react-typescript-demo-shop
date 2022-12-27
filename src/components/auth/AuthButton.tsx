import React from 'react';
import { useAppSelector } from '../../hooks/react-redux-hooks';

const AuthButton: React.FC = () => {
  const authState = useAppSelector((state) => state.auth);
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <>
      {!authState.loggedIn && <button onClick={loginHandler}>Login</button>}
      {authState.loggedIn && <button onClick={logoutHandler}>Login</button>}
    </>
  );
};

export default AuthButton;
