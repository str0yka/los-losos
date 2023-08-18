import { RootState } from '~store';

export const getCart = (state: RootState) => state.cart;
export const getTotalCount = (state: RootState) => state.cart.productsInCart.reduce(
  (accum, { count }) => accum + count,
  0,
);
export const getTotalPrice = (state: RootState) => state.cart.productsInCart.reduce(
  (accum, { product: { price }, count }) => accum + price * count,
  0,
);
