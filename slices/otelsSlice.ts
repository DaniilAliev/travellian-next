import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from './store';

export const otelsAdapter = createEntityAdapter();

type InitialState = {
  adress: string,
  city: string,
  created_at: number,
  description: string,
  id: number,
  name: string,
  pictures: string[],
  price: number,
  rating: number,
};

const initialState = otelsAdapter.getInitialState();

const otelsSlice = createSlice({
  name: 'otels',
  initialState,
  reducers: {
   addOtels: otelsAdapter.setAll,
  },
});

export const { actions } = otelsSlice;
export const selectors = otelsAdapter.getSelectors((state: RootState ) => state.otels);
export default otelsSlice.reducer;