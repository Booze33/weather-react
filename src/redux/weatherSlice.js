// actions.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const apiKey = '1ca97810c5feeba5dfc8e1930a3c2a8c';

export const fetchWeatherData = createAsyncThunk('fetchWeather', async () => {
  const apiURL = 'api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=1ca97810c5feeba5dfc8e1930a3c2a8c';

  const response = await axios.get(apiURL);

  const weather = response.data.list.map((item) => ({
    ...item,
    id: item.dt,
  }));

  return weather;
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }));
    builder.addCase(fetchWeatherData.rejected, (state, action) => ({
      ...state,
      error: action.error.message,
      loading: false,
    }));
  },
});

export default weatherSlice.reducer;
