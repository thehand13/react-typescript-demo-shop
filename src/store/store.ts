import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth-slice';
import { cartItemsReducer } from './cart-items-slice';
import { shopItemsReducer } from './shop-items-slice';
import { uiReducer } from './ui-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartItemsReducer,
    shop: shopItemsReducer,
    ui: uiReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
