import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimeExcerpt } from './AnimeExcerpt';
import { fetchAnimes } from './topAnimeListSlice';

export const AnimeList = () => {
  const listStatus = useSelector((state) => state.topAnimeList.status);
  const list = useSelector((state) => state.topAnimeList.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listStatus === 'idle') {
      dispatch(fetchAnimes());
    }
  }, [dispatch, listStatus]);

  let content;

  if (listStatus === 'pending') {
    content = <div>Loading..</div>;
  } else if (listStatus === 'fulfilled') {
    content = list.map((anime) => <AnimeExcerpt key={anime.mal_id} anime={anime} />);
  } else if (listStatus === 'rejected') {
    content = <div>Sorry, we couldn't get the list. Please try again.</div>;
  }

  return <div className="list-group">{content}</div>;
};
