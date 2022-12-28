import React from 'react';

import { useAppDispatch } from '../../hooks/react-redux-hooks';
import { ShopItem } from '../../store/shop-items-slice';
import { removeShopItem } from '../../store/shop-items-slice';
import Card from '../UI/Card';
const AdministrationListItem: React.FC<{ item: ShopItem }> = (props) => {
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    dispatch(removeShopItem(props.item.id));
  };
  return (
    <li>
      <Card>
        <div>{props.item.title}</div>
        <div>{props.item.price}</div>
        <div>{props.item.description}</div>
        <button onClick={deleteHandler}>Delete Item</button>
      </Card>
    </li>
  );
};

export default AdministrationListItem;
