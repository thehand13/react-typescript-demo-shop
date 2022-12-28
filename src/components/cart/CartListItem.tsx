import React from 'react';
import { useAppDispatch } from '../../hooks/react-redux-hooks';
import {
  addCartItem,
  CartItem,
  pushCartItems,
  removeCartItem,
} from '../../store/cart-items-slice';
import Card from '../UI/Card';

const CartListItem: React.FC<{ item: CartItem }> = (props) => {
  const dispatch = useAppDispatch();

  const addCartItemHandler = () => {
    dispatch(
      addCartItem({
        title: props.item.title,
        id: props.item.id,
        price: props.item.price,
      })
    );
  };
  const removeCartItemHandler = () => {
    dispatch(removeCartItem(props.item.id));
  };
  return (
    <li>
      <Card>
        <div>{props.item.title}</div>
        <div>{props.item.totalPrice}</div>
        <div>
          {props.item.price} x {props.item.quantity}
        </div>
        <button onClick={addCartItemHandler}>+</button>
        <button onClick={removeCartItemHandler}>-</button>
      </Card>
    </li>
  );
};

export default CartListItem;
