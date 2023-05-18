import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "../../assets/shared/MENU_ITEMS";

const initialState = {
    menuItemsArray: MENU_ITEMS
}

const menuItemsSlice = createSlice({
    name: 'menuItems',
    initialState
});

export const menuItemsReducer = menuItemsSlice.reducer;

export const selectAllMenuItems = (state) => {
    return state.menuItems.menuItemsArray;
}