import React, { useEffect } from 'react';
import { Box, Heading, Link, ListItem, List } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { fetchAnimePhoto } from './infoSlice';
import { Link as ReachLink } from '@reach/router';

export const RelatedAnimeTitles = ({ related }) => {
  const renderTitles = () => {
    return Object.keys(related).map((category) => {
      const titles = related[category].map((title) => (
        <ListItem key={nanoid()}>
          <Link as={ReachLink} to={`/anime/${title.mal_id}`} color="blue.600">
            {title.name}
          </Link>
        </ListItem>
      ));
      return (
        <Box key={nanoid()} mb="4">
          <Heading size="sm" mb="1">
            {category}
          </Heading>
          <List>{titles}</List>
        </Box>
      );
    });
  };
  return (
    <>
      <Heading size="md" mb="4">
        Related Titles
      </Heading>
      {renderTitles()}
    </>
  );
};
