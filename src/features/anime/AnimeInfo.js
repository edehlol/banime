import { Link as ReachLink } from '@reach/router';
import { Image } from '@chakra-ui/image';
import { Box, Tab, TabList, TabPanels, Tabs, TabPanel, chakra } from '@chakra-ui/react';
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
import { InfoText } from '../common/InfoText';
import { nanoid } from '@reduxjs/toolkit';

export const AnimeInfo = ({ anime }) => {
  const renderLinks = (array, type) => {
    if (array.length > 0) {
      return array.map((item, index) => (
        <React.Fragment key={nanoid()}>
          <Link to={`/anime/${type}/${item.mal_id}`}>{item.name}</Link>
          {index === array.length - 1 ? '' : ', '}
        </React.Fragment>
      ));
    }
  };

  return (
    <Box w={['100%', '25%']} pt="2">
      <Image src={anime.image_url} alt={anime.title} borderRadius="lg" mb="2" />
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
        <InfoText name={'Type'}>
          <Link to={`/top/${anime.type}`}>{anime.type}</Link>
        </InfoText>
        <InfoText name={'Episodes'}>{anime.episodes}</InfoText>
        <InfoText name="Status">{anime.status ? anime.status : '-'}</InfoText>
        <InfoText name="Aired">
          {format(parseISO(anime.aired.from), 'dd/MM/yyyy')} to{' '}
          {anime.aired.to ? format(parseISO(anime.aired.to), 'dd/MM/yyyy') : 'Now'}
        </InfoText>
        <InfoText name="Producers">{renderLinks(anime.producers, 'producer')}</InfoText>
        <InfoText name="Licensors">{renderLinks(anime.licensors, 'producer')}</InfoText>
        <InfoText name="Studios">{renderLinks(anime.studios, 'producer')}</InfoText>
        <InfoText name="Source">{anime.source ? anime.source : '-'}</InfoText>
        <InfoText name="Genres">{renderLinks(anime.genres, 'genres')}</InfoText>
        <InfoText name="Duration">{anime.duration ? anime.duration : '-'}</InfoText>
        <InfoText name="Rating">{anime.rating ? anime.rating : '-'}</InfoText>
      </Box>
    </Box>
  );
};
