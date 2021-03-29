import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Link } from '@reach/router';

import React from 'react';
import { Searchbar } from '../features/search/Searchbar';

export const Navbar = () => {
  return (
    <Flex h="16" justify="center" align="center" bg="purple.700" mb="8" px="8">
      <Heading as={Link} to="/" color="white" size="lg">
        Banime.
      </Heading>

      <Spacer />
      <Searchbar />
    </Flex>
  );
};
