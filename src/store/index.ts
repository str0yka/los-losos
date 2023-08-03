import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from '@/store/reducers/cartReducer';
import { promocodeReducer } from '@/store/reducers/promocodeReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    promocode: promocodeReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
