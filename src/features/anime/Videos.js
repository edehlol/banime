import { Box, Heading, AspectRatio } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from './animeSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Image } from '@chakra-ui/image';

export const Videos = ({ animeId }) => {
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

  const renderVideos = () => {
    console.log(hasVideos());
    if (!hasVideos()) {
      return <>There are no videos available.</>;
    }
    return Object.keys(videos).map((category) => {
      let list;
      let titles;

      if (!category.includes('request')) {
        titles = videos[category].map((video) => {
          //  if non-youtube video -> show link to external site
          if (video.url) {
            return (
              <Box mb="8">
                <Heading size="sm" mb="4">
                  {video.title}
                </Heading>
                <AspectRatio ratio={16 / 9}>
                  <Image src={video.image_url} />
                </AspectRatio>
              </Box>
            );
          } else {
            return (
              <Box mb="8">
                <Heading size="sm" mb="4">
                  {video.title}
                </Heading>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={video.video_url}
                    loading="lazy"
                    title={video.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              </Box>
            );
          }
        });
        list = (
          <Box key={nanoid()}>
            <Heading size="md" mb="8">
              {category}
            </Heading>
            {titles}
          </Box>
        );
      }
      return list;
    });
  };
  let content;
  if (fetchVideosStatus === 'pending') {
    content = <div>waiting...</div>;
  } else if (fetchVideosStatus === 'fulfilled') {
    content = renderVideos();
  }

  return <>{content}</>;
};
