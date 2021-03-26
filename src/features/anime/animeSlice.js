import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getSingleAnime } from '../../api/Jikan';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async (animeId) => {
  const response = await axios.request(getSingleAnime(animeId));
  return response.data;
});

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducer: {},
  extraReducers: {
    [fetchAnime.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = 'fulfilled';
      state.data = action.payload;
    },
  },
});

export default animeSlice.reducer;
