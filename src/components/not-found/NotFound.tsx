import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <div>Sorry! Page was not found</div>
      <Link to="/">Return to the shop</Link>
    </>
  );
};

export default NotFound;
