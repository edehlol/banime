import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getInfo } from '../../api/Jikan';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchInfo = createAsyncThunk('info/fetchInfo', async ({ category, id }) => {
  const response = await axios.request(getInfo(category, id));
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
  },
});

export default infoSlice.reducer;
