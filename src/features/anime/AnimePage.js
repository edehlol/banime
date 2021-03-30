import { Image } from '@chakra-ui/image';
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
import { StarIcon } from '@chakra-ui/icons';
import { Box, Tab, TabList, TabPanels, Tabs, TabPanel } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link as ReachLink } from '@reach/router';
import { RelatedAnimeTitles } from './RelatedAnimeTitles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime, fetchVideos } from './animeSlice';
import { VideoList } from './VideoList';
import { EpisodeList } from './EpisodeList';
import { format, parseISO } from 'date-fns';
import { AnimeInfo } from './AnimeInfo';
import { Reviews } from '../info/Reviews';

export const AnimePage = ({ anime }) => {
  console.log(anime);

  return (
    <>
      <Container maxW="container.lg">
        <Flex direction={['column', 'row']}>
          <AnimeInfo anime={anime} />
          <Spacer />
          <Box w={['100%', '70%']}>
            <Box>
              <Heading size="lg">{anime.title_english ? anime.title_english : anime.title}</Heading>
              <Text mb="2">{anime.title_japanese}</Text>
              <p>
                By{' '}
                <Link color="blue.600" as={ReachLink} to="/">
                  {anime.studios[0] ? anime.studios[0].name : ''}
                </Link>
              </p>
              <Tabs isLazy>
                <TabList overflowX="scroll" pb="4">
                  <Tab>Details</Tab>
                  <Tab>Videos</Tab>
                  <Tab>Episodes</Tab>
                  <Tab>Reviews</Tab>
                  <Tab>Recommendations</Tab>
                  <Tab>Stats</Tab>
                  <Tab>News</Tab>
                  <Tab>Forum</Tab>
                  <Tab>Featured</Tab>
                  <Tab>Clubs</Tab>
                  <Tab>Pictures</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Heading size="md" pb="1rem">
                      Synopsis
                    </Heading>
                    <p>{anime.synopsis}</p>
                  </TabPanel>
                  <TabPanel>
                    <VideoList animeId={anime.mal_id} />
                  </TabPanel>
                  <TabPanel>
                    <EpisodeList animeId={anime.mal_id} />
                  </TabPanel>
                  <TabPanel>
                    <Reviews id={anime.mal_id} type="anime" />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Divider border="2" borderColor="gray.200" opacity="1" />
            <Box p="4">
              <RelatedAnimeTitles related={anime.related} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
