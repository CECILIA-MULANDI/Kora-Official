// Footer.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="rgba(0, 128, 0, 0.5)" py={4} color="white">
      <Box maxW="1200px" mx="auto" px={4} textAlign="center">
        <Text>&copy; 2024 KORA INSUTECH. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;