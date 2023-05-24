import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCities = createAsyncThunk('fetchCities', async () => {
  const apiURL = 'https://api.teleport.org/api/cities/';

  const response = await axios.get(apiURL);

  // eslint-disable-next-line no-underscore-dangle
  const cities = response.data._embedded['city:search-results'].map(
    (result) => result.matching_full_name.split(',')[0].trim(),
  );

  return cities;
});

const initialState = {
  data: [],
  status: 'idle',
  error: null,
  filter: '',
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(fetchCities.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      status: 'succeeded',
    }));

    builder.addCase(fetchCities.rejected, (state, action) => ({
      ...state,
      error: action.error.message,
      status: 'failed',
    }));
  },
});

export const { setFilter } = citySlice.actions;
export default citySlice.reducer;
