import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from '@/store/reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
