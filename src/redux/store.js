import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice';
import cityReducer from './country/countrySlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    city: cityReducer,
  },
});

export default store;
