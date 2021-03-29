import { AspectRatio, Box, Heading } from '@chakra-ui/layout';
import React from 'react';

export const Video = ({ video, children }) => {
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
};
