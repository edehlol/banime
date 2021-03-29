import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAnime, getVideos } from '../../api/Jikan';
import axios from 'axios';

const initialState = {
  data: null,
  dataError: null,
  fetchDataStatus: 'idle',
  fetchVideosStatus: 'idle',
  videos: null,
};

export const fetchAnime = createAsyncThunk('info/fetchInfo', async (id) => {
  const response = await axios.request(getAnime(id));
  return response.data;
});
export const fetchVideos = createAsyncThunk('info/fetchVideos', async (id) => {
  const response = await axios.request(getVideos(id));
  return response.data;
});

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAnime.pending]: (state) => {
      state.fetchDataStatus = 'pending';
    },
    [fetchAnime.fulfilled]: (state, action) => {
      state.fetchDataStatus = 'fulfilled';
      state.data = action.payload;
    },
    [fetchAnime.rejected]: (state, action) => {
      state.status = 'rejected';
      state.dataError = action.error.message;
    },
    [fetchVideos.pending]: (state, action) => {
      state.fetchVideosStatus = 'pending';
    },
    [fetchVideos.fulfilled]: (state, action) => {
      state.fetchVideosStatus = 'fulfilled';
      state.videos = action.payload;
    },
  },
});

export default animeSlice.reducer;
