import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from './infoSlice';
import { AnimeInfo } from './AnimeInfo';
import { MangaInfo } from './MangaInfo';
import { PersonInfo } from './PersonInfo';

export const InfoPage = ({ category, id }) => {
  const subject = useSelector((state) => state.info.data);
  const fetchStatus = useSelector((state) => state.info.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo({ category, id }));
  }, [id, category, dispatch]);

  let content;
  if (fetchStatus === 'pending') {
    content = <div>waiting...</div>;
  } else if (fetchStatus === 'fulfilled') {
    if (category === 'anime') {
      content = <AnimeInfo anime={subject} />;
    } else if (category === 'manga') {
      content = <MangaInfo manga={subject} />;
    } else if (category === 'person') {
      content = <PersonInfo person={subject} />;
    } else {
      content = <div>what?</div>;
    }
  }

  return <div>{content}</div>;
};
