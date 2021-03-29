import { Image } from '@chakra-ui/image';
import { Box, Tab, TabList, TabPanels, Tabs, TabPanel } from '@chakra-ui/react';
import {
  AspectRatio,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Link,
  Divider,
} from '@chakra-ui/layout';
import { format, parseISO } from 'date-fns';
import React from 'react';

export const AnimeInfo = ({ anime }) => {
  return (
    <Box w={['100%', '25%']}>
      <Image src={anime.image_url} alt={anime.title} borderRadius="lg" />
      <Flex align="center">
        <Text fontSize="4xl" mr="1">
          {anime.score}
        </Text>
        <Box fontWeight="semibold" fontSize="xs">
          <Text>#{anime.popularity}</Text>
          <Text>by {anime.members} users</Text>
        </Box>
      </Flex>
      <Box fontSize="sm" fontWeight="medium">
        <Text>Type: {anime.type}</Text>
        <Divider />
        <Text>Episodes: {anime.episodes}</Text>
        <Divider />
        <Text>Status: {anime.status ? anime.status : '-'}</Text>
        <Divider />
        <Text>
          Aired: {format(parseISO(anime.aired.from), 'dd/MM/yyyy')} to{' '}
          {anime.aired.to ? format(parseISO(anime.aired.to), 'dd/MM/yyyy') : 'Now'}
        </Text>
        <Divider />
        <Text>Producers: </Text>
        <Divider />
        <Text>Licensors: </Text>
        <Divider />
        <Text>Studios: </Text>
        <Divider />
        <Text>Source: {anime.source ? anime.source : '-'}</Text>
        <Divider />
        <Text>Genres: </Text>
        <Divider />
        <Text>Duration: {anime.duration ? anime.duration : '-'}</Text>
        <Divider />
        <Text>Rating: {anime.rating ? anime.rating : '-'}</Text>
      </Box>
    </Box>
  );
};
