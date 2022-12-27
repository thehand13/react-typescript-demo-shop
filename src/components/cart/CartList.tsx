import React from 'react';
import { useAppSelector } from '../../hooks/react-redux-hooks';
import CartListItem from './CartListItem';

const CartList: React.FC = () => {
  const cartState = useAppSelector((state) => state.cart);
  return (
    <ul>
      {cartState.items &&
        cartState.items.map((item) => (
          <CartListItem key={item.id} item={item} />
        ))}
    </ul>
  );
};

export default CartList;
