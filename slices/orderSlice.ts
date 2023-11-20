import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const orderAdapter = createEntityAdapter();

type InitialState = {
	destination: string | null,
  guestsNumber: string | null,
  checkIn: any,
  checkOut: any,
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const initialState: InitialState = {
  destination: 'Berlin',
  guestsNumber: '1',
  checkIn: today.toISOString(),
  checkOut: tomorrow.toISOString(),
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
// export const selectors = orderAdapter.getSelectors((state: any ) => state.order);
export const selectOrder = (state: any) => state.order;
export default orderSlice.reducer;