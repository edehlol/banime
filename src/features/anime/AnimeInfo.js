import { Link as ReachLink } from '@reach/router';
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
  Divider,
} from '@chakra-ui/layout';
import { Link } from '../common/Link';
import { format, parseISO } from 'date-fns';
import React from 'react';

export const AnimeInfo = ({ anime }) => {
  const renderLinks = (array, type) => {
    if (array.length > 0) {
      return array.map((item, index) => (
        <>
          <Link to={`/anime/${type}/${item.mal_id}`}>{item.name}</Link>
          {index === array.length - 1 ? '' : ', '}
        </>
      ));
    }
  };

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
        <Text mb="2">
          Type: <Link to={`/top/${anime.type}`}>{anime.type}</Link>
        </Text>
        <Divider mb="2" />
        <Text mb="2">Episodes: {anime.episodes}</Text>
        <Divider mb="2" />
        <Text mb="2">Status: {anime.status ? anime.status : '-'}</Text>
        <Divider mb="2" />
        <Text mb="2">
          Aired: {format(parseISO(anime.aired.from), 'dd/MM/yyyy')} to{' '}
          {anime.aired.to ? format(parseISO(anime.aired.to), 'dd/MM/yyyy') : 'Now'}
        </Text>
        <Divider mb="2" />
        <Text mb="2">Producers: {renderLinks(anime.producers, 'producer')}</Text>
        <Divider mb="2" />
        <Text mb="2">Licensors: {renderLinks(anime.licensors, 'producer')}</Text>
        <Divider mb="2" />
        <Text mb="2">Studios: {renderLinks(anime.studios, 'producer')}</Text>
        <Divider mb="2" />
        <Text mb="2">Source: {anime.source ? anime.source : '-'}</Text>
        <Divider mb="2" />
        <Text mb="2">Genres: {renderLinks(anime.genres, 'genres')}</Text>
        <Divider mb="2" />
        <Text mb="2">Duration: {anime.duration ? anime.duration : '-'}</Text>
        <Divider mb="2" />
        <Text mb="2">Rating: {anime.rating ? anime.rating : '-'}</Text>
      </Box>
    </Box>
  );
};
