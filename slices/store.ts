import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import orderReducer from './orderSlice';
import generalReducer from './generalSlice';
import otelsReducer from './otelsSlice';
import favReducer from './favouriteSlice';

const persistConfig = {
  key: 'root', // Ключ для сохранения данных в localStorage
  storage, // Используемый механизм сохранения (в данном случае localStorage)
  whitelist: ['order', 'general'], // Указываем, какие слайсы хотим сохранить (в данном случае только "order")
};

const rootReducer = combineReducers({
  order: orderReducer,
  general: generalReducer,
  otels: otelsReducer,
  favourite: favReducer,
  // Другие редюсеры
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
});
