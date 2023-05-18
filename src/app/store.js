import { configureStore } from '@reduxjs/toolkit';
import { menuItemsReducer } from '../features/menu/menuSlice';
import { reservedReducer } from '../features/user/reserverationSlice';

export const store = configureStore({
  reducer: {
    menuItems: menuItemsReducer,
    reserved: reservedReducer
  }
});
