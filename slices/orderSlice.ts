import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const orderAdapter = createEntityAdapter();

type InitialState = {
	destination: string | null,
  guestsNumber: number| null,
  checkIn: number | null,
  checkOut: number | null,
}

const initialState: InitialState = {
  destination: null,
  guestsNumber: null,
  checkIn: null,
  checkOut: null,
};
  
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
   addOrder: (state, { payload }) => ({
    ...state,
    destination: payload.destination,
    guestsNumber: payload.guestsNumber,
    checkIn: payload.checkIn,
    checkOut: payload.checkOut,
   })
  },
});

export const { actions } = orderSlice;
export const selectors = orderAdapter.getSelectors((state) => state.order);
export default orderSlice.reducer;