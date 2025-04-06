import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import categoryIdReducer from './features/categoryId-slice';
import quickViewReducer from './features/quickView-slice';
import cartReducer from './features/cart-slice';
import wishlistReducer from './features/wishlist-slice';
import productDetailsReducer from './features/product-details';
import categoryIdReduser from './features/categoryId-slice';

// Configure persistence for categoryIdReducer
const categoryPersistConfig = {
  key: 'categoryId',
  storage,
};

const persistedCategoryReducer = persistReducer(categoryPersistConfig, categoryIdReducer);

export const store = configureStore({
  reducer: {
    categoryIdReduser: persistedCategoryReducer,
    quickViewReducer,
    cartReducer,
    wishlistReducer,
    productDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
