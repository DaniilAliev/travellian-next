import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from './store';

export const favAdapter = createEntityAdapter();

const initialState = favAdapter.getInitialState();

const favSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
   addFavs: favAdapter.setAll,
   addFav: favAdapter.addOne,
   removeFav: favAdapter.removeOne,
  },
  });

  export const { actions } = favSlice;
	export const selectors = favAdapter.getSelectors((state: RootState ) => state.favourite);
	export default favSlice.reducer;