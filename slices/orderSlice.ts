import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const orderAdapter = createEntityAdapter();

type InitialState = {
	destination: string | null,
  guestsNumber: string | null,
  daysDiff: number | null,
  minPrice: number | null,
  maxPrice: number | null,
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const initialState: InitialState = {
  destination: 'Berlin',
  guestsNumber: '1',
  daysDiff: 1,
  minPrice: null,
  maxPrice: null,
};
  
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, { payload }) => ({
      ...state,
      destination: payload.destination,
      guestsNumber: payload.guestsNumber,
      daysDiff: payload.daysDiff,
      minPrice: null,
      maxPrice: null,
    }),
    changeCity: (state, { payload }) => ({
      ...state, destination: payload,
    }),
    changeGuestNumber: (state, { payload }) => ({
      ...state, guestsNumber: payload,
    }),
    setMinPrice: (state, { payload }) => ({
      ...state, minPrice: payload,
    }),
    setMaxPrice: (state, { payload }) => ({
      ...state, maxPrice: payload,
    }),
  },
});

export const { actions } = orderSlice;
// export const selectors = orderAdapter.getSelectors((state: any ) => state.order);
export const selectOrder = (state: any) => state.order;
export default orderSlice.reducer;