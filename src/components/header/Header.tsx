import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/react-redux-hooks';
import AuthButton from '../auth/AuthButton';

const Header: React.FC = () => {
  const authState = useAppSelector((state) => state.auth);

  return (
    <nav>
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link>
      {authState.loggedAsAdmin && <Link to="/admin">Administration</Link>}
      <AuthButton />
    </nav>
  );
};

export default Header;
