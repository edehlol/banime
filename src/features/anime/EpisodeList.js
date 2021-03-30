import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link, List, ListItem, OrderedList } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from './animeSlice';
import { format, parseISO } from 'date-fns';
import { nanoid } from '@reduxjs/toolkit';

export const EpisodeList = ({ animeId }) => {
  const fetchEpisodesStatus = useSelector((state) => state.anime.fetchEpisodesStatus);
  const episodes = useSelector((state) => state.anime.episodes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEpisodes(animeId));
  }, [dispatch, animeId]);

  let content;
  if (fetchEpisodesStatus === 'pending') {
    content = <div>loading</div>;
  } else if (fetchEpisodesStatus === 'fulfilled') {
    const renderedEpisodes = episodes.map((episode) => (
      <Tr key={nanoid()}>
        <Td>{episode.episode_id}</Td>
        <Td>{episode.title}</Td>
        <Td>{format(parseISO(episodes[0].aired), 'dd/MM/yyyy')}</Td>
        <Td>
          <Link isExternal href={episode.forum_url}>
            Forum
            <ExternalLinkIcon mx="2" />
          </Link>
        </Td>
      </Tr>
    ));
    content = (
      <Table>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Episode Title</Th>
            <Th>Aired</Th>
            <Th>Discussion</Th>
          </Tr>
        </Thead>
        <Tbody>{renderedEpisodes}</Tbody>
      </Table>
    );
  }
  return <div>{content}</div>;
};
