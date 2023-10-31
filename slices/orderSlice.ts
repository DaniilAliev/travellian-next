import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const orderAdapter = createEntityAdapter();

type State = {
	destination: string | null,
  guestsNumber: number| null,
  checkIn: number | null,
  checkOut: number | null,
}

const initialState: State = {
  destination: null,
  guestsNumber: null,
  checkIn: null,
  checkOut: null,
};
  
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    
  },
});

export const { actions } =orderSlice;
export const selectors = orderAdapter.getSelectors((state: State) => state);
export default orderSlice.reducer;