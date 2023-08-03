import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import CartApi from '@/http/CartApi';

export const fetchAllProductsInCart = createAsyncThunk(
  'cart/fetchAllProductsInCart',
  async (accessToken?: string) => {
    const data = await CartApi.getAll(accessToken);

    if ('message' in data) {
      return [];
    }

    return data;
  },
);

export const fetchAddToCart = createAsyncThunk(
  'cart/fetchAddToCart',
  async ({ id, accessToken }: { id: number; accessToken: string }) => {
    const data = await CartApi.add(id, accessToken);

    if (data.token) {
      localStorage.setItem('CART_TOKEN', data.token);
    }

    return data;
  },
);

export const fetchDeleteFromCart = createAsyncThunk(
  'cart/fetchDeleteFromCart',
  async ({ id, accessToken }: { id: number; accessToken: string }) => {
    const data = await CartApi.delete(id, accessToken);

    if (data.token) {
      localStorage.setItem('CART_TOKEN', data.token);
    }

    return data;
  },
);

export const fetchDeleteItemFromCart = createAsyncThunk(
  'cart/fetchDeleteItemFromCart',
  async ({ id, accessToken }: { id: number; accessToken: string }) => {
    const { success } = await CartApi.deleteItem(id, accessToken);

    if (!success) throw new Error('Не удалось удалить товар из корзины');

    return id;
  },
);

export const fetchDeleteAllFromCart = createAsyncThunk(
  'cart/fetchDeleteAllFromCart',
  async (accessToken: string) => {
    const { success } = await CartApi.deleteAllItems(accessToken);

    if (!success) throw new Error('Не удалось удалить товары из корзины');
  },
);

type CartStateType = {
  data: Array<ProductInCart>;
  status: 'loading' | 'loading/one' | 'loading/all' | 'finished' | 'error';
};

const initialState: CartStateType = {
  data: [],
  status: 'loading/all',
};

const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsInCart.pending, (state) => {
        state.status = 'loading/all';
      })
      .addCase(fetchAllProductsInCart.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = 'finished';
      })
      .addCase(fetchAllProductsInCart.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchAddToCart.pending, (state) => {
        state.status = 'loading/one';
      })
      .addCase(fetchAddToCart.fulfilled, (state, { payload }) => {
        const candidate = state.data.find(
          ({ product }) => product.id === payload.product.id,
        );
        if (candidate?.count) {
          candidate.count += 1;
        } else {
          state.data.push(payload);
        }
        state.status = 'finished';
      })
      .addCase(fetchAddToCart.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchDeleteFromCart.pending, (state) => {
        state.status = 'loading/one';
      })
      .addCase(fetchDeleteFromCart.fulfilled, (state, { payload }) => {
        const candidate = state.data.find(
          ({ product }) => product?.id === payload.product.id,
        );
        if (candidate?.count && candidate.count > 1) {
          candidate.count -= 1;
        } else {
          state.data = state.data.filter(
            ({ product }) => product.id !== payload.product.id,
          );
        }
        state.status = 'finished';
      })
      .addCase(fetchDeleteFromCart.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchDeleteItemFromCart.pending, (state) => {
        state.status = 'loading/one';
      })
      .addCase(fetchDeleteItemFromCart.fulfilled, (state, { payload }) => {
        state.data = state.data.filter(({ product }) => product.id !== payload);
        state.status = 'finished';
      })
      .addCase(fetchDeleteItemFromCart.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchDeleteAllFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeleteAllFromCart.fulfilled, (state) => {
        state.data = [];
        state.status = 'finished';
      })
      .addCase(fetchDeleteAllFromCart.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const cartReducer = cartSlices.reducer;
