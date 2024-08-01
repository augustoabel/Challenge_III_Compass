import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productSlice';
import userReducer from './productSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk'

// Configuração do redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Lista de reducers que você quer persistir
};

// Combinação dos reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
});

// Aplicação do persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Criação da store com o middleware thunk
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Para compatibilidade com redux-persist
    }).concat(thunk),
});

// Configuração do persistor
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
