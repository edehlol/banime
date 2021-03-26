import React from 'react';
import { useSelector } from 'react-redux';
import { selectAnimeById } from './topAnimeListSlice';

export const SingleAnimePage = ({ animeId }) => {
  const anime = useSelector((state) => selectAnimeById(state, animeId));
  console.log(anime);
  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.image_url} alt={anime.title} />
    </div>
  );
};
