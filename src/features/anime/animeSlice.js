import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAnime, getVideos, getEpisodes } from '../../api/Jikan';
import axios from 'axios';

const initialState = {
  data: null,
  dataError: null,
  fetchDataStatus: 'idle',
  fetchVideosStatus: 'idle',
  fetchEpisodesStatus: 'idle',
  videos: null,
  episodes: null,
};

export const fetchAnime = createAsyncThunk('info/fetchInfo', async (id) => {
  const response = await axios.request(getAnime(id));
  return response.data;
});
export const fetchVideos = createAsyncThunk('info/fetchVideos', async (id) => {
  const response = await axios.request(getVideos(id));
  return response.data;
});
export const fetchEpisodes = createAsyncThunk('info/fetchEpisodes', async (id) => {
  const response = await axios.request(getEpisodes(id));
  return response.data.episodes;
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
    [fetchEpisodes.pending]: (state) => {
      state.fetchEpisodesStatus = 'pending';
    },
    [fetchEpisodes.fulfilled]: (state, action) => {
      state.fetchEpisodesStatus = 'fulfilled';
      state.episodes = action.payload;
    },
  },
});

export default animeSlice.reducer;
