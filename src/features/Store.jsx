import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Taskslice.jsx';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
