import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAnime, getVideos, getEpisodes, getReviews } from '../../api/Jikan';
import axios from 'axios';

const initialState = {
  data: null,
  dataError: null,
  fetchDataStatus: 'idle',
  fetchVideosStatus: 'idle',
  fetchEpisodesStatus: 'idle',
  videos: null,
  episodes: null,
  reviews: null,
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
export const fetchReviews = createAsyncThunk('info/fetchReviews', async ({ type, id, page }) => {
  console.log(id, type, page);
  const res = await axios.request(getReviews(type, id, page));
  return res.data;
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
    [fetchReviews.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export default animeSlice.reducer;
