import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCities = createAsyncThunk('fetchCities', async () => {
  const apiURL = 'https://api.teleport.org/api/cities/';

  const response = await axios.get(apiURL);

  const cities = response.data._embedded['city:search-results'].map(
    (result) => result.matching_full_name,
  );
  console.log(cities);

  return cities;
});

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        status: 'succeeded',
      };
    });

    builder.addCase(fetchCities.rejected, (state, action) => ({
      ...state,
      error: action.error.message,
      status: 'failed',
    }));
  },
});

export default citySlice.reducer;
