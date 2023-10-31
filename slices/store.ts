import { configureStore } from '@reduxjs/toolkit';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
  order: orderReducer,
  // Другие редюсеры
});

export default configureStore({
  reducer: rootReducer,
});
