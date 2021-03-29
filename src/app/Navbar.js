import { Box, Flex } from '@chakra-ui/layout';
import { Link } from '@reach/router';
import React from 'react';
import { Searchbar } from '../features/search/Searchbar';

export const Navbar = () => {
  return (
    <Flex>
      <Link to="/" className="navbar-brand">
        Banime.
      </Link>
      <Searchbar />
    </Flex>
  );
};
