import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getTopAnimes } from '../../api/Jikan';

const initialState = {
  list: null,
  status: 'idle',
  error: null,
};

export const fetchAnimes = createAsyncThunk('topAnimeList/fetchAnimes', async () => {
  const response = await axios.request(getTopAnimes);
  return response.data.top;
});

const topAnimeListSlice = createSlice({
  name: 'topAnimeList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAnimes.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchAnimes.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.list = action.payload;
    },
    [fetchAnimes.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export const selectAnimeById = (state, id) => {
  return state.topAnimeList.list.find((anime) => anime.mal_id === Number(id));
};

export default topAnimeListSlice.reducer;
