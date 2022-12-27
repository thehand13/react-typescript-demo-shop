import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux-hooks';
import { fetchCartItems, pushCartItems } from '../../store/cart-items-slice';
import CartList from './CartList';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => state.cart);
  useEffect(() => {
    if (cartState.firstLoad) {
      dispatch(fetchCartItems());
    } else {
      dispatch(pushCartItems(cartState.items));
    }
  }, [dispatch, cartState.itemsWereChanged]);
  return (
    <div>
      <CartList />
    </div>
  );
};

export default Cart;
