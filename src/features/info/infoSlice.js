import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getInfo, getVideos } from '../../api/Jikan';

const initialState = {
  data: null,
  videos: null,
  status: 'idle',
  error: null,
};

export const fetchInfo = createAsyncThunk('info/fetchInfo', async ({ category, id }) => {
  const response = await axios.request(getInfo(category, id));
  return response.data;
});
export const fetchVideos = createAsyncThunk('info/fetchVideos', async (id) => {
  const response = await axios.request(getVideos(id));
  return response.data;
});

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchInfo.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchInfo.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload;
    },
    [fetchVideos.fulfilled]: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export default infoSlice.reducer;
