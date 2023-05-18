import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isReserved: false
}

const reservationSlice = createSlice({
    name: 'reserved',
    initialState,
    reducers: {
        setReservation: (state, action) => {
            return { ...state, isReserved: action.payload };
        }
    }
})

export const reservedReducer = reservationSlice.reducer;

export const { setReservation } = reservationSlice.actions;

export const selectReserved = (state) => {
    return state.reserved.isReserved
}