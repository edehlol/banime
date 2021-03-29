import { Box, Heading, AspectRatio, Link, List, ListItem } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from './animeSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Image } from '@chakra-ui/image';
import { Video } from './Video';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const VideoList = ({ animeId }) => {
  const videos = useSelector((state) => state.anime.videos);
  const fetchVideosStatus = useSelector((state) => state.anime.fetchVideosStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos(animeId));
  }, [dispatch, animeId]);

  const hasVideos = () => {
    let hasVideos = [];

    for (const category in videos) {
      if (!category.includes('request')) {
        hasVideos.push(videos[category]);
      }
    }
    return hasVideos.every((video) => Array.isArray(video) && video.length > 0) ? true : false;
  };

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
      return <div>There are no promos available.</div>;
    }

    // console.log(hasVideos());
    // if (!hasVideos()) {
    //   return <>There are no videos available.</>;
    // }
    // return Object.keys(videos).map((category) => {
    //   let list;
    //   let titles;

    //   if (!category.includes('request')) {
    //     titles = videos[category].map((video) => {
    //       //  if non-youtube video -> show link to external site
    //       if (video.url) {
    //         return (
    //           <Box mb="8">
    //             <Heading size="sm" mb="4">
    //               {video.title}
    //             </Heading>
    //             <AspectRatio ratio={16 / 9}>
    //               <Image src={video.image_url} />
    //             </AspectRatio>
    //           </Box>
    //         );
    //       } else {
    //         return <Video video={video} />;
    //       }
    //     });
    //     list = (
    //       <Box key={nanoid()}>
    //         <Heading size="md" mb="8">
    //           {category}
    //         </Heading>
    //         {titles}
    //       </Box>
    //     );
    //   }
    //   return list;
    // });
  };
  const renderEpisodeLinks = () => {
    if (videos.episodes.length > 0) {
      let episodes = videos.episodes.map((episode) => (
        <ListItem>
          <Link isExternal href={episode.url} target="_blank">
            {episode.title} - {episode.episode}
            <ExternalLinkIcon mx="2" />
          </Link>
        </ListItem>
      ));
      return (
        <>
          <Heading size="md" mb="4">
            Episodes
          </Heading>
          <List>{episodes}</List>
        </>
      );
    }
  };
  let promotions;
  let episodes;

  if (fetchVideosStatus === 'pending') {
    promotions = <div>waiting...</div>;
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
