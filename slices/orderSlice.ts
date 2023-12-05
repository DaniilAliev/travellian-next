import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import moment from 'moment';

export const orderAdapter = createEntityAdapter();

type InitialState = {
	destination: string | null,
  guestsNumber: string | null,
  daysDiff: number | null,
  minPrice: number | null,
  maxPrice: number | null,
  checkIn: any,
  checkOut: any,
}

const today = new Date();
const todayMoment = moment(today, 'DD.MM.YYYY, HH:mm:ss');
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowMoment = moment(tomorrow, 'DD.MM.YYYY, HH:mm:ss');

export const initialState: InitialState = {
  destination: 'Berlin',
  guestsNumber: '1',
  daysDiff: 1,
  minPrice: null,
  maxPrice: null,
  checkIn: todayMoment,
  checkOut: tomorrow,
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
      checkIn: payload.checkIn._i,
      checkOut: payload.checkOut._i,
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
export const selectOrder = (state: any) => state.order;
export default orderSlice.reducer;