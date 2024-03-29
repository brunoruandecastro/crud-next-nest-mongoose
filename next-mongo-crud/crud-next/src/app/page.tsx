import React from 'react';
import Layout from './layout';
import { Box, Flex } from '@chakra-ui/react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <Box>
      <Header />
      <Flex align="center" justifyContent="center"></Flex>
    </Box>
  );
}
