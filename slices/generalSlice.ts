import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const generalAdapter = createEntityAdapter();

type InitialState = {
  isMobile: boolean | null,
  authToken: string | null
}

const initialState: InitialState = {
  isMobile: null,
  authToken: null,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setMobile: (state, { payload }) => {
      state.isMobile = payload;
    },
    setAuthToken: (state, { payload }) => {
      state.authToken = payload;
    }
  }
});

export const { actions } = generalSlice;
export const selectors = generalAdapter.getSelectors((state: any ) => state.general);
export default generalSlice.reducer;

