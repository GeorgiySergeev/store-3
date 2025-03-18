import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

type InitialState = {
  value: Product;
};

const initialState = {
  value: {
    name: '',
    price: '',
    sale_price: '',
    images: [{ id: 0, src: '', alt: '' }], // Updated to match expected type
    id: 0,
    description: '',
  },
} as InitialState;

export const productDetails = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
