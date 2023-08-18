import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { cartApi, promocodeApi } from '~utils/api';

export const fetchGetCart = createAsyncThunk(
  'cart/fetchGetCart',
  async (accessToken: string) => cartApi.getAll(accessToken),
);

export const fetchAddItemToCart = createAsyncThunk(
  'cart/fetchAddItemToCart',
  async ({ productId, accessToken }: { productId: number; accessToken: string }) => {
    const response = await cartApi.addItem({ productId }, accessToken);

    if (response.token) {
      localStorage.setItem('CART_TOKEN', response.token);
    }

    return response;
  },
);

export const fetchRemoveItemFromCart = createAsyncThunk(
  'cart/fetchRemoveItemFromCart',
  async ({ productId, accessToken }: { productId: number; accessToken: string }) => {
    const response = await cartApi.removeItem({ productId }, accessToken);

    if (response.token) {
      localStorage.setItem('CART_TOKEN', response.token);
    }

    return response;
  },
);

export const fetchRemoveProductFromCart = createAsyncThunk(
  'cart/fetchRemoveProductFromCart',
  async ({ productId, accessToken }: { productId: number; accessToken: string }) => {
    await cartApi.removeProduct({ productId }, accessToken);
    return productId;
  },
);

export const fetchRemoveAllProductsFromCart = createAsyncThunk(
  'cart/fetchRemoveAllProductsFromCart',
  async (accessToken: string) => cartApi.removeAllProducts(accessToken),
);

export const fetchApplyPromocode = createAsyncThunk(
  'cart/fetchApplyPromocode',
  async ({ code, accessToken }: { code: string, accessToken: string }) => (
    promocodeApi.apply({ code }, accessToken)
  ),
);

export const fetchCancelPromocode = createAsyncThunk(
  'cart/fetchCancelPromocode',
  async (accessToken: string) => promocodeApi.cancel(accessToken),
);

export const fetchConfirmOrder = createAsyncThunk(
  'cart/fetchConfirmOrder',
  async ({
    formData,
    accessToken,
  }: {
    formData: CartConfirmRequest,
    accessToken: string,
  }) => cartApi.confirm(formData, accessToken),
);

type CartState = {
  productsInCart: CartGetAllResponse['productsInCart'];
  promocode: CartGetAllResponse['promocode'];
  status:
  | 'loading/all'
  | 'loading/oneItem'
  | 'loading/oneProduct'
  | 'loading/allProducts'
  | 'loading/promocode'
  | 'loading/confrim'
  | 'error/all'
  | 'error/oneItem'
  | 'error/oneProduct'
  | 'error/allProducts'
  | 'error/promocode'
  | 'error/confirm'
  | 'finished'
};

const initialState: CartState = {
  productsInCart: [],
  promocode: undefined,
  status: 'loading/all',
};

const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCart.pending, (state) => {
        state.status = 'loading/all';
      })
      .addCase(fetchGetCart.fulfilled, (state, action) => {
        state.productsInCart = action.payload.productsInCart;
        state.promocode = action.payload.promocode;
        state.status = 'finished';
      })
      .addCase(fetchGetCart.rejected, (state) => {
        state.status = 'error/all';
      })
      .addCase(fetchAddItemToCart.pending, (state) => {
        state.status = 'loading/oneItem';
      })
      .addCase(fetchAddItemToCart.fulfilled, (state, action) => {
        const candidate = state.productsInCart.find((productInCart) => (
          productInCart.product.id === action.payload.product.id
        ));

        if (candidate) {
          candidate.count = action.payload.count;
        } else {
          state.productsInCart.push(action.payload);
        }

        state.status = 'finished';
      })
      .addCase(fetchAddItemToCart.rejected, (state) => {
        state.status = 'error/oneItem';
      })
      .addCase(fetchRemoveItemFromCart.pending, (state) => {
        state.status = 'loading/oneItem';
      })
      .addCase(fetchRemoveItemFromCart.fulfilled, (state, action) => {
        const candidate = state.productsInCart.find((productInCart) => (
          productInCart.product.id === action.payload.product.id
        ));

        if (action.payload.count && candidate) {
          candidate.count = action.payload.count;
        } else {
          state.productsInCart = state.productsInCart.filter((productInCart) => (
            productInCart.product.id !== action.payload.product.id
          ));
        }
      })
      .addCase(fetchRemoveItemFromCart.rejected, (state) => {
        state.status = 'error/oneItem';
      })
      .addCase(fetchRemoveProductFromCart.pending, (state) => {
        state.status = 'loading/oneProduct';
      })
      .addCase(fetchRemoveProductFromCart.fulfilled, (state, action) => {
        state.productsInCart = state.productsInCart.filter((productInCart) => (
          productInCart.product.id !== action.payload
        ));
        state.status = 'finished';
      })
      .addCase(fetchRemoveProductFromCart.rejected, (state) => {
        state.status = 'error/oneProduct';
      })
      .addCase(fetchRemoveAllProductsFromCart.pending, (state) => {
        state.status = 'loading/allProducts';
      })
      .addCase(fetchRemoveAllProductsFromCart.fulfilled, (state) => {
        state.productsInCart = [];
        state.status = 'finished';
      })
      .addCase(fetchRemoveAllProductsFromCart.rejected, (state) => {
        state.status = 'error/allProducts';
      })
      .addCase(fetchApplyPromocode.pending, (state) => {
        state.status = 'loading/promocode';
      })
      .addCase(fetchApplyPromocode.fulfilled, (state, action) => {
        state.promocode = action.payload;
        state.status = 'finished';
      })
      .addCase(fetchApplyPromocode.rejected, (state) => {
        state.status = 'error/promocode';
      })
      .addCase(fetchCancelPromocode.pending, (state) => {
        state.status = 'loading/promocode';
      })
      .addCase(fetchCancelPromocode.fulfilled, (state) => {
        state.promocode = undefined;
        state.status = 'finished';
      })
      .addCase(fetchCancelPromocode.rejected, (state) => {
        state.status = 'error/promocode';
      })
      .addCase(fetchConfirmOrder.pending, (state) => {
        state.status = 'loading/confrim';
      })
      .addCase(fetchConfirmOrder.fulfilled, (state) => {
        state.productsInCart = [];
        state.promocode = undefined;
        state.status = 'finished';
      })
      .addCase(fetchConfirmOrder.rejected, (state) => {
        state.status = 'error/confirm';
      });
  },
});

export const cartReducer = cartSlices.reducer;
