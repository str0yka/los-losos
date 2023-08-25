import { createSlice } from '@reduxjs/toolkit';

type MenuState = {
  isOpen: boolean;
};

const initialState: MenuState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open: (state) => { state.isOpen = true; },
    close: (state) => { state.isOpen = false; },
  },
});

export const { open, close } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
