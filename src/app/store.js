import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../features/product-list/productListSlice';

const store = configureStore({
  reducer:{
    product: productListReducer
  },
})

export default store