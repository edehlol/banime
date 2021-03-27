import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getSearchResults } from '../../api/Jikan';

const initialState = {
  status: 'idle',
  results: null,
};

export const fetchResults = createAsyncThunk('search/fetchResults', async ({ category, query }) => {
  const response = await axios.request(getSearchResults(category, query));
  return response.data;
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearResults(state) {
      state.status = 'idle';
      state.results = null;
    },
  },
  extraReducers: {
    [fetchResults.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchResults.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.results = action.payload;
    },
  },
});

export const { clearResults } = searchSlice.actions;

export default searchSlice.reducer;
