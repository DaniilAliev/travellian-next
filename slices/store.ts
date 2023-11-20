import { configureStore } from '@reduxjs/toolkit';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import orderReducer from './orderSlice';
import generalReducer from './generalSlice';
import otelsReducer from './otelsSlice';

const rootReducer = combineReducers({
  order: orderReducer,
  general: generalReducer,
  otels: otelsReducer,
  // Другие редюсеры
});

export default configureStore({
  reducer: rootReducer,
});
