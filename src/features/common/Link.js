import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';

export const Link = ({ children, to }) => {
  return (
    <ChakraLink color="blue.600" as={ReachLink} to={to}>
      {children}
    </ChakraLink>
  );
};
