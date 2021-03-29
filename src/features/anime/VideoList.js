import { Box, Center, Heading, Link, List, ListItem } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from './animeSlice';
import { nanoid } from '@reduxjs/toolkit';

import { Video } from './Video';
import { ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/tooltip';
import { Spinner } from '@chakra-ui/spinner';

export const VideoList = ({ animeId }) => {
  const videos = useSelector((state) => state.anime.videos);
  const fetchVideosStatus = useSelector((state) => state.anime.fetchVideosStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos(animeId));
  }, [dispatch, animeId]);

  const renderPromos = () => {
    if (videos.promo.length > 0) {
      let promos = videos.promo.map((video) => <Video video={video} key={nanoid()} />);
      return (
        <>
          <Heading size="md" mb="4">
            Promos
          </Heading>
          <Box>{promos}</Box>
        </>
      );
    } else {
      return <div>There are no promotional videos available.</div>;
    }
  };
  const renderEpisodeLinks = () => {
    if (videos.episodes.length > 0) {
      let episodes = videos.episodes.map((episode) => (
        <ListItem mb="2" key={nanoid()}>
          <Link isExternal={true} href={episode.url}>
            {episode.title} - {episode.episode}
            <ExternalLinkIcon mx="2" />
          </Link>
        </ListItem>
      ));
      return (
        <>
          <Heading size="md" mb="4">
            Episodes &nbsp;
            <Tooltip
              size="sm"
              label="These episodes are hosted on MyAnimeList and require a premium subscription to watch."
            >
              <InfoIcon boxSize="4" />
            </Tooltip>
          </Heading>
          <List>{episodes}</List>
        </>
      );
    }
  };
  let promotions;
  let episodes;

  if (fetchVideosStatus === 'pending') {
    promotions = (
      <Center>
        <Spinner />
      </Center>
    );
  } else if (fetchVideosStatus === 'fulfilled') {
    promotions = renderPromos();
    episodes = renderEpisodeLinks();
  }

  return (
    <>
      <>{promotions}</>
      <>{episodes}</>
    </>
  );
};
