import React, { useEffect } from 'react';
import { AnimePage } from './AnimePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime, fetchVideos } from './animeSlice';
import { Spinner } from '@chakra-ui/spinner';
import { Center } from '@chakra-ui/layout';

export const Anime = ({ animeId }) => {
  const anime = useSelector((state) => state.anime.data);
  const fetchDataStatus = useSelector((state) => state.anime.fetchDataStatus);
  const dataError = useSelector((state) => state.anime.dataError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnime(animeId));
  }, [dispatch, animeId]);
  let content;
  if (fetchDataStatus === 'pending') {
    content = (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  } else if (fetchDataStatus === 'fulfilled') {
    content = <AnimePage anime={anime} />;
  } else if (fetchDataStatus === 'rejected') {
    console.log(dataError);
    content = <div>aww im sooo sowwy :3</div>;
  }
  return <>{content}</>;
};
