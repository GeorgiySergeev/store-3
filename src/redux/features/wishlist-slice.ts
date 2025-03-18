import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  items: WishListItem[];
};

type WishListItem = {
  id: number;
  name: string;
  price: string;
  sale_price: string;
  quantity: number;
  status: string;
  images?: {};
};

const initialState: InitialState = {
  items: [],
};

export const wishlist = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<WishListItem>) => {
      const { id, name, price, quantity, images, sale_price, status } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity,
          images,
          sale_price,
          status,
        });
      }
    },
    removeItemFromWishlist: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    removeAllItemsFromWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist, removeAllItemsFromWishlist } =
  wishlist.actions;
export default wishlist.reducer;
