import { configureStore } from '@reduxjs/toolkit'
import viewReducer from './reducers/viewSlice.js';
import productDataReducer from './reducers/productDataSlice.js';
import filterReducer from './reducers/filterSlice.js';
import confirmReducer from './reducers/confirmSlice.js';

export const store = configureStore({
  reducer: {
    view: viewReducer,
    productData: productDataReducer,
    filter: filterReducer,
    confirm: confirmReducer
  },
})