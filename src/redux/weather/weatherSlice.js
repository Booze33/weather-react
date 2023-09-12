import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '1ca97810c5feeba5dfc8e1930a3c2a8c';

export const fetchWeatherData = createAsyncThunk('fetchWeather', async (locationName) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=${apiKey}`;

  const response = await axios.get(apiURL);
  console.log(response.data);

  const weather = {
    city: response.data.city.name,
    country: response.data.city.country,
    img: response.data.list[0].weather[0].icon,
    main: response.data.list[0].weather[0].main,
    condition: response.data.list[0].weather[0].description,
    temperature: response.data.list[0].main.temp,
    temp_max: response.data.list[0].main.temp_max,
    temp_min: response.data.list[0].main.temp_min,
    tomorrow: response.data.list[8].main.temp,
    humidity: response.data.list[0].main.humidity,
    pressure: response.data.list[0].main.pressure,
  };

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
