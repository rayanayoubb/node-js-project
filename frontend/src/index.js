import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productsReducer, { productsFetch } from './slices/productsSlice';
import { productsApi } from './slices/productsApi';
import authReducer, { loadUser } from "./slices/authSlice";

const store = configureStore({
  reducer:{
    products: productsReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch())
store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);