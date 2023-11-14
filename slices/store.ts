import { configureStore } from '@reduxjs/toolkit';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import orderReducer from './orderSlice';
import generalReducer from './generalSlice'

const rootReducer = combineReducers({
  order: orderReducer,
  general: generalReducer,
  // Другие редюсеры
});

export default configureStore({
  reducer: rootReducer,
});
