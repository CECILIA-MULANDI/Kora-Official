// src/Header.js
import React from 'react';
import { Box, Flex, Text, Link, Icon, HStack, Divider } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box
      position="relative"
      height="70vh" // Reduced height
      backgroundImage="url('path/to/your/image.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(0, 128, 0, 0.5)", // green hue overlay
        zIndex: -1,
      }}
    >
      {/* Logo and Phone Section */}
      <Flex p={4} justify="space-between" align="center">
        <Flex align="center" ml={40}> {/* Adjusted margin */}
          <Text fontSize="2xl" fontWeight="bold" color="black">KORA</Text>
        </Flex>
        <Flex align="center" mr={40}> {/* Adjusted margin */}
          <Icon as={PhoneIcon} w={6} h={6} mr={2} />
          <Text>+1 (123) 456-7890</Text>
        </Flex>
      </Flex>

      {/* Separator Line */}
      <Flex justify="center">
        <Divider borderColor="black" width="70%" />
      </Flex>

      {/* Navigation Bar */}
      <HStack
        as="nav"
        spacing={4}
        p={4}
        bg="rgba(0, 128, 0, 0.5)" // Same green background
        width="70%"
        margin="0 auto"
        justify="space-between"
      >
        <Link href="#" px={2} py={1} borderRadius="md" _hover={{ textDecoration: "none" }}>
          Home
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="black" />
        <Link href="#" px={2} py={1} borderRadius="md" _hover={{ textDecoration: "none" }}>
          About
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="black" />
        <Link href="#" px={2} py={1} borderRadius="md" _hover={{ textDecoration: "none" }}>
          Services
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="black" />
        <Link href="#" px={2} py={1} borderRadius="md" _hover={{ textDecoration: "none" }}>
          Contact
        </Link>
      </HStack>

      {/* Centered Text */}
      <Flex direction="column" align="center" justify="center" height="calc(70vh - 120px)">
        <Text fontSize="6xl" color="white" fontWeight="bold">
          KORA INSUTECH
        </Text>
        <Text fontSize="2xl" color="white">
          Fair Pay for Fair Play!
        </Text>
      </Flex>

      {/* Cards */}
      <Flex position="absolute" bottom="-50px" width="100%" justify="center" p={4}>
        {["Card 1", "Card 2", "Card 3", "Card 4"].map((card, index) => (
          <Box
            key={index}
            bg="white"
            boxShadow="lg"
            borderRadius="md"
            p={6}
            textAlign="center"
            width="200px"
            borderLeft={index !== 0 ? "1px solid" : "none"} // Add left border to all cards except the first one
            borderColor="gray.200"
            ml={index !== 0 ? "-1px" : "0"} // Remove double border effect
          >
            <Icon as={PhoneIcon} w={10} h={10} mb={4} color="green.500" />
            <Text fontSize="xl" fontWeight="bold">
              {card}
            </Text>
            <Text fontSize="md">Description</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Header;