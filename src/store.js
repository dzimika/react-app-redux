import { configureStore } from '@reduxjs/toolkit'; //includes combined reducers, simplified way of configuring Redux store
import counterReducer from './features/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;