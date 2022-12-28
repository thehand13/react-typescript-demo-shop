import React from 'react';
import { useAppSelector } from '../../hooks/react-redux-hooks';
import CartListItem from './CartListItem';
import classes from './CartList.module.css';

const CartList: React.FC = () => {
  const cartState = useAppSelector((state) => state.cart);
  return (
    <ul className={classes['cart-list']}>
      {!cartState.items.length && <h2>Your cart is empty</h2>}
      {cartState.items.map((item) => (
        <CartListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
