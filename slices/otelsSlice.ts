import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

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
export const selectors = otelsAdapter.getSelectors((state: any ) => state.otels);
// export const selectOrder = (state: any) => state.otels;
export default otelsSlice.reducer;