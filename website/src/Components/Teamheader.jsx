import React from 'react';
import {
  Box, Flex, Text, Link, HStack, Divider, IconButton, Drawer,
  DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack, Image
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../images/logo.png';
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa6';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative" height={{ base: '50vh', md: '70vh' }}>
      {/* Background with Dome Effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        background="radial-gradient(circle at top, black 30%, #1C5E3D 80%)"
        zIndex={-2}
      />

      {/* Green Tint */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 77, 38, 0.5)"
        zIndex={-1}
      />

      {/* Logo and Phone Section */}
      <Flex p={4} justify="space-between" align="center" position="relative">
        <Flex align="center" ml={{ base: 0, md: 40 }}>
          <Link href="/">
            <Flex align="center">
              {/* Logo next to KORA */}
              <Image src={Logo} alt="Logo" boxSize="70px" />
              <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="white">KORA</Text>
            </Flex>
          </Link>
        </Flex>
        {/* <Flex align="center" mr={{ base: 0, md: 40 }}>
          <Icon as={PhoneIcon} w={6} h={6} mr={2} color="white" />
          <Text color="white">+1 (123) 456-7890</Text>
        </Flex> */}
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          onClick={onOpen}
          color="white"
        />
      </Flex>

      {/* Navigation Bar */}
      <HStack
        as="nav"
        spacing={4}
        p={4}
        bg="rgba(0, 77, 38, 0.5)"
        width="70%"
        margin="0 auto"
        justify="space-between"
        position="relative"
        display={{ base: 'none', md: 'flex' }}
      >
        <Link href="/" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
          Home
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="black" />
        <Link href="#" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
          About
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="black" />
        <Link href="#" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
          Services
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="black" />
        <Link href="/team" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
          The Team
        </Link>
      </HStack>

      {/* Mobile Sidebar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="start">
                <Link href="/" onClick={onClose} px={2} py={1} color="black" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
                  Home
                </Link>
                <Link href="#" onClick={onClose} px={2} py={1} color="black" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
                  About
                </Link>
                <Link href="#" onClick={onClose} px={2} py={1} color="black" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
                  Services
                </Link>
                <Link href="/team" onClick={onClose} px={2} py={1} color="black" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
                  The Team
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Centered Text */}
      <Flex direction="column" align="center" justify="center" height="calc(55vh - 120px)" position="relative">
        <Text fontSize={{ base: '4xl', md: '6xl' }} color="white" fontWeight="bold" textAlign="center">
          MEET THE TEAM
        </Text>
        <Text fontSize={{ base: 'lg', md: '2xl' }} color="white" textAlign="center">
          Behind Kora InsuTech!
        </Text>

        <HStack spacing={8} mt={100}>
          <IconButton
            as="a"
            href="https://x.com/korainsutecH"
            target="_blank"
            aria-label="X (Twitter)"
            icon={<FaXTwitter />}
            colorScheme="whiteAlpha"
            variant="outline"
            size="lg"
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/company/kora-insurtech/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
            colorScheme="whiteAlpha"
            variant="outline"
            size="lg"
          />
          <IconButton
            as="a"
            href="mailto:korainsutech@gmail.com" 
            aria-label="Gmail"
            icon={<FaEnvelope />}
            colorScheme="whiteAlpha"
            variant="outline"
            size="lg"
          />
          <IconButton
            as="a"
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="whiteAlpha"
            variant="outline"
            size="lg"
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
