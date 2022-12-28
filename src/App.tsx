import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import Administration from './components/administration/Administration';
import About from './components/about/About';
import NotFound from './components/not-found/NotFound';
import MainLayout from './layouts/MainLayout';
import { useAppSelector, useAppDispatch } from './hooks/react-redux-hooks';
import { fetchCartItems, pushCartItems } from './store/cart-items-slice';

function App() {
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
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Administration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
