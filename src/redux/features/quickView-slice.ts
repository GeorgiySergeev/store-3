import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

type InitialState = {
  value: Product;
};

const initialState = {
  value: {
    name: '',
    price: '',
    sale_price: 0,
    images: [{ id: 0, src: '', alt: '' }], // Updated to match expected type
    id: 0,
    description: '',
  },
} as InitialState;

export const quickView = createSlice({
  name: 'quickView',
  initialState,
  reducers: {
    updateQuickView: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },

    resetQuickView: () => {
      return {
        value: initialState.value,
      };
    },
  },
});

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;
