import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const generalAdapter = createEntityAdapter();

const initialState = {
  isMobile: null,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setMobile: (state, { payload }) => {
      state.isMobile = payload;
    }
  }
});

export const { actions } = generalSlice;
export const selectors = generalAdapter.getSelectors((state: any ) => state.general);
export default generalSlice.reducer;

