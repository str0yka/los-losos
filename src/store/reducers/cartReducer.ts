import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import CartApi from '@/http/CartApi';

export const fetchAllProductsInCart = createAsyncThunk(
  'cart/fetchAllProductsInCart',
  async (accessToken?: string) => {
    const response = await CartApi.getAll(accessToken);

    if ('message' in response) {
      return [];
    }

    return response;
  },
);

export const fetchAddToCart = createAsyncThunk(
  'cart/fetchAddToCart',
  async ({ id, accessToken }: { id: number; accessToken: string }) => {
    const response = await CartApi.add(id, accessToken);

    if (response.token) {
      localStorage.setItem('CART_TOKEN', response.token);
    }

    return response;
  },
);

export const fetchDeleteFromCart = createAsyncThunk(
  'cart/fetchDeleteFromCart',
  async ({ id, accessToken }: { id: number; accessToken: string }) => {
    const response = await CartApi.delete(id, accessToken);

    if (response.token) {
      localStorage.setItem('CART_TOKEN', response.token);
    }

    return response;
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

export const fetchApplyPromocode = createAsyncThunk(
  'cart/fetchApplyPromocode',
  async ({ code, accessToken }: { code: string, accessToken: string }) => {
    const response = await CartApi.applyPromocode(code, accessToken);

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  },
);

export const fetchCancelPromocode = createAsyncThunk(
  'cart/fetchCancelPromocode',
  async (accessToken: string) => {
    const response = await CartApi.cancelPromocode(accessToken);

    if (!response.success || 'message' in response) {
      throw new Error('Ошибка при отмене промокода');
    }
  },
);

export const fetchConfirmOrder = createAsyncThunk(
  'cart/fetchConfirmOrder',
  async ({
    formData,
    accessToken,
  }: {
    formData: { [key: string]: string },
    accessToken: string,
  }) => {
    const response = await CartApi.confirmOrder(formData, accessToken);

    if ('message' in response || !response.success) {
      throw new Error('Ошибка при оформление заказа');
    }

    return response;
  },
);

type CartState = {
  productsInCart: Array<ProductInCart>;
  promocode: null | Promocode;
  status:
  | 'loading'
  | 'loading/promocode'
  | 'loading/one'
  | 'loading/all'
  | 'finished'
  | 'error';
};

const initialState: CartState = {
  productsInCart: [],
  promocode: null,
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
        state.productsInCart = payload.productsInCart;
        state.promocode = payload.promocode;
        state.status = 'finished';
      })
      .addCase(fetchAllProductsInCart.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchAddToCart.pending, (state) => {
        state.status = 'loading/one';
      })
      .addCase(fetchAddToCart.fulfilled, (state, { payload }) => {
        const candidate = state.productsInCart.find(
          ({ product }) => product.id === payload.product.id,
        );
        if (candidate?.count) {
          candidate.count += 1;
        } else {
          state.productsInCart.push(payload);
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
        const candidate = state.productsInCart.find(
          ({ product }) => product?.id === payload.product.id,
        );
        if (candidate?.count && candidate.count > 1) {
          candidate.count -= 1;
        } else {
          state.productsInCart = state.productsInCart.filter(
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
        state.productsInCart = state.productsInCart.filter(({ product }) => product.id !== payload);
        state.status = 'finished';
      })
      .addCase(fetchDeleteItemFromCart.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchDeleteAllFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeleteAllFromCart.fulfilled, (state) => {
        state.productsInCart = [];
        state.status = 'finished';
      })
      .addCase(fetchDeleteAllFromCart.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchApplyPromocode.pending, (state) => {
        state.status = 'loading/promocode';
      })
      .addCase(fetchApplyPromocode.fulfilled, (state, { payload }) => {
        state.promocode = payload;
        state.status = 'finished';
      })
      .addCase(fetchApplyPromocode.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchCancelPromocode.pending, (state) => {
        state.status = 'loading/promocode';
      })
      .addCase(fetchCancelPromocode.fulfilled, (state) => {
        state.promocode = null;
        state.status = 'finished';
      })
      .addCase(fetchCancelPromocode.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchConfirmOrder.pending, (state) => {
        state.status = 'loading/all';
      })
      .addCase(fetchConfirmOrder.fulfilled, (state) => {
        state.productsInCart = [];
        state.status = 'finished';
      })
      .addCase(fetchConfirmOrder.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const cartReducer = cartSlices.reducer;
