import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/react-redux-hooks';
import { hideLoginModal } from '../../store/ui-slice';
import Card from '../UI/Card';
import Modal from '../UI/Modal';

import classes from './LoginModal.module.css';

const LoginModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailState(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordState(event.target.value);
  };

  const addItemHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const dispatchHideLoginModal = dispatch.bind(null, hideLoginModal());

  return (
    <Modal closeModalFunc={dispatchHideLoginModal}>
      <Card>
        <h2>Log In</h2>
        <form className={classes['login-form']} onSubmit={addItemHandler}>
          <label htmlFor="E-mail">E-mail</label>
          <input onChange={onEmailChange} type="e-mail" value={emailState} />
          <label htmlFor="Password">Password</label>
          <input
            onChange={onPasswordChange}
            type="password"
            value={passwordState}
          />

          <button>Login</button>
        </form>
      </Card>
    </Modal>
  );
};

export default LoginModal;
