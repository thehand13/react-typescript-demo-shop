import React, { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/react-redux-hooks';
import { fetchShopItems } from '../../store/shop-items-slice';
import AdministrationAddNewItem from './AdministrationAddNewItem';
import AdministrationListItem from './AdministrationListItem';

const Administration: React.FC = () => {
  const shopState = useAppSelector((state) => state.shop);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchShopItems());
  }, [dispatch, shopState.itemsWereChanged]);

  const logoutHandler = () => {};
  return (
    <>
      <nav>
        <button onClick={logoutHandler}>Logout and return to the shop</button>
      </nav>
      <section>
        <AdministrationAddNewItem />
      </section>
      <section>
        <ul>
          {shopState.items &&
            shopState.items.map((item) => (
              <AdministrationListItem key={item.id} item={item} />
            ))}
        </ul>
      </section>
    </>
  );
};

export default Administration;
