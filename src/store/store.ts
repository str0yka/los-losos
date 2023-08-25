import { configureStore } from '@reduxjs/toolkit';

import { cartReducer, menuReducer } from './reducers';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
