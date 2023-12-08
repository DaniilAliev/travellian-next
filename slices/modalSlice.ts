import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const modalAdapter = createEntityAdapter();

// type InitialState = {
//   isMobile: boolean | null,
//   authToken: string | null
// }

const initialState = {
	type: null,
	info: null,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, { payload }) => {
			state.type = payload.type;
			state.info = payload.info;
		},
		closeModal: (state) => {
			state.type = null;
			state.info = null;
		},
	}
});

export const { actions } = modalSlice;
export const selectors = modalAdapter.getSelectors((state: any ) => state.modal);
export default modalSlice.reducer;

