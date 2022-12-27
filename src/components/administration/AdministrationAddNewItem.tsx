import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/react-redux-hooks';
import { addShopItem } from '../../store/shop-items-slice';

const AdministrationAddNewItem: React.FC = () => {
  const dispatch = useAppDispatch();

  const [titleState, setTitleState] = useState('');
  const [priceState, setPriceState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleState(event.target.value);
  };
  const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceState(event.target.value);
  };
  const onDescriptionChange = (event: any) => {
    setDescriptionState(event.target.value);
  };

  const addItemHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      titleState.trim().length !== 0 &&
      priceState.trim().length !== 0 &&
      descriptionState.trim().length !== 0
    ) {
      dispatch(
        addShopItem({
          title: titleState,
          price: +priceState,
          description: descriptionState,
        })
      );
      setTitleState('');
      setPriceState('');
      setDescriptionState('');
    }
  };
  return (
    <>
      <form onSubmit={addItemHandler}>
        <label>Title</label>
        <input onChange={onTitleChange} type="text" value={titleState} />
        <label>Price</label>
        <input onChange={onPriceChange} type="text" value={priceState} />
        <label>Description</label>
        <input
          onChange={onDescriptionChange}
          type="text"
          value={descriptionState}
        />
        <button>Add New Item</button>
      </form>
    </>
  );
};

export default AdministrationAddNewItem;
