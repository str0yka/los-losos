import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import AppFetch from '@/http';

export const fetchCheckPromocode = createAsyncThunk(
  'promocode/fetchCheckPromocode',
  async (code: string | undefined) => {
    try {
      if (!code) return;

      const response = await AppFetch.post('/promocode/check', {
        body: { code },
      });

      if (response.id) {
        // throw new Error('Неверный промокод');
        return response;
      }
      // alert('Такого промокода не существует'); // TODO: кастомный alert
      throw new Error('Неверный промокод');
    } catch (error) {
      throw new Error('Ошибка при проверке промокода');
    }
  },
);

interface PromocodeState {
  promocode: Promocode | null;
  status: 'loading' | 'finished' | 'error';
}

const initialState: PromocodeState = {
  promocode: null,
  status: 'finished',
};

const promocodeSlice = createSlice({
  name: 'promocode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCheckPromocode.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCheckPromocode.fulfilled, (state, { payload }) => {
        state.promocode = payload;
        state.status = 'finished';
      })
      .addCase(fetchCheckPromocode.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const promocodeReducer = promocodeSlice.reducer;
