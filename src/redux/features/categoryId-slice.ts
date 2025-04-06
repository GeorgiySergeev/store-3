import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type InitialState = {
  categoryId: string | null;
};

const initialState = {
  categoryId: null,
};

export const categorySlice = createSlice({
  name: 'categoryId',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.categoryId = action.payload;
    },
  },
});
export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
