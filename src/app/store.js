import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import topAnimeListReducer from '../features/topAnimeList/topAnimeListSlice';
import infoReducer from '../features/info/infoSlice';
import animeReducer from '../features/anime/animeSlice';

export const store = configureStore({
  reducer: {
    topAnimeList: topAnimeListReducer,
    search: searchReducer,
    info: infoReducer,
    anime: animeReducer,
  },
});
