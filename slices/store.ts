import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import orderReducer from './orderSlice';
import generalReducer from './generalSlice';
import otelsReducer from './otelsSlice';
import favReducer from './favouriteSlice';
import modalReducer from './modalSlice';

const persistConfig = {
  key: 'root', 
  storage,
  whitelist: ['order', 'general'],
};

const rootReducer = combineReducers({
  order: orderReducer,
  general: generalReducer,
  otels: otelsReducer,
  favourite: favReducer,
  modal: modalReducer,
  // Другие редюсеры
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
});
