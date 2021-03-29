import React from 'react';
import { Text, Divider } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';

export const InfoText = ({ children, name }) => {
  return (
    <>
      <Text mb="2">
        {name}: <chakra.span fontWeight="normal">{children}</chakra.span>
      </Text>
      <Divider mb="2" />
    </>
  );
};
