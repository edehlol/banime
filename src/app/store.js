import { configureStore } from '@reduxjs/toolkit';
import animeReducer from '../features/anime/animeSlice';
import searchReducer from '../features/search/searchSlice';
import topAnimeListReducer from '../features/topAnimeList/topAnimeListSlice';
import infoReducer from '../features/info/infoSlice';

export const store = configureStore({
  reducer: {
    topAnimeList: topAnimeListReducer,
    anime: animeReducer,
    search: searchReducer,
    info: infoReducer,
  },
});
