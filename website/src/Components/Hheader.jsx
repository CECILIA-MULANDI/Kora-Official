import React from 'react';
import {
  Box, Flex, Text, Link, HStack, Divider, Icon, IconButton, Drawer,
  DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack
} from '@chakra-ui/react';
import { PhoneIcon, HamburgerIcon } from '@chakra-ui/icons';
import BackgroundImg from '../images/Designer.jpeg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative" height={{ base: '50vh', md: '70vh' }}>
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundImage={`url(${BackgroundImg})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        opacity={0.5} // Adjust the opacity to make the image more transparent
        zIndex={-2}
      />

      {/* Green Tint */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 128, 0, 0.5)"
        zIndex={-1}
      />

      {/* Logo and Phone Section */}
      <Flex p={4} justify="space-between" align="center" position="relative">
        <Flex align="center" ml={{ base: 0, md: 40 }}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="black">KORA</Text>
        </Flex>
        <Flex align="center" mr={{ base: 0, md: 40 }}>
          <Icon as={PhoneIcon} w={6} h={6} mr={2} />
          <Text>+1 (123) 456-7890</Text>
        </Flex>
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          onClick={onOpen}
        />
      </Flex>

      {/* Navigation Bar */}
      <HStack
        as="nav"
        spacing={4}
        p={4}
        bg="rgba(0, 128, 0, 0.5)"
        width="70%"
        margin="0 auto"
        justify="space-between"
        position="relative"
        display={{ base: 'none', md: 'flex' }}
      >
        <Link href="#" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
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
        <Link href="#" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
          Contact
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
                <Link href="#" onClick={onClose} px={2} py={1} color="black" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
                  Home
                </Link>
                <Link href="#" onClick={onClose} px={2} py={1} color="black" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
                  About
                </Link>
                <Link href="#" onClick={onClose} px={2} py={1} color="black" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
                  Services
                </Link>
                <Link href="#" onClick={onClose} px={2} py={1} color="black" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
                  Contact
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Centered Text */}
      <Flex direction="column" align="center" justify="center" height="calc(70vh - 120px)" position="relative">
        <Text fontSize={{ base: '4xl', md: '6xl' }} color="white" fontWeight="bold" textAlign="center">
          KORA INSUTECH
        </Text>
        <Text fontSize={{ base: 'lg', md: '2xl' }} color="white" textAlign="center">
          Fair Pay for Fair Play!
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;

// import React from 'react';
// import { Box, Flex, Text, Link, HStack, Divider, Icon } from '@chakra-ui/react';
// import { PhoneIcon } from '@chakra-ui/icons';
// import BackgroundImg from '../images/Designer.jpeg';

// const Header = () => {
//   return (
//     <Box position="relative" height={{ base: '50vh', md: '70vh' }}>
//       {/* Background Image */}
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         width="100%"
//         height="100%"
//         backgroundImage={`url(${BackgroundImg})`}
//         backgroundPosition="center"
//         backgroundRepeat="no-repeat"
//         backgroundSize="cover"
//         opacity={0.5} // Adjust the opacity to make the image more transparent
//         zIndex={-2}
//       />

//       {/* Green Tint */}
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         width="100%"
//         height="100%"
//         bg="rgba(0, 128, 0, 0.5)"
//         zIndex={-1}
//       />

//       {/* Logo and Phone Section */}
//       <Flex p={4} justify="space-between" align="center" position="relative" flexDirection={{ base: 'column', md: 'row' }}>
//         <Flex align="center" ml={{ base: 0, md: 40 }}>
//           <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="black">KORA</Text>
//         </Flex>
//         <Flex align="center" mt={{ base: 2, md: 0 }} mr={{ base: 0, md: 40 }}>
//           <Icon as={PhoneIcon} w={6} h={6} mr={2} />
//           <Text>+1 (123) 456-7890</Text>
//         </Flex>
//       </Flex>

//       {/* Navigation Bar */}
//       <HStack
//         as="nav"
//         spacing={{ base: 2, md: 4 }}
//         p={4}
//         bg="rgba(0, 128, 0, 0.5)"
//         width={{ base: '90%', md: '70%' }}
//         margin="0 auto"
//         justify="space-between"
//         position="relative"
//         flexDirection={{ base: 'column', md: 'row' }}
//       >
//         <Link href="#" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
//           Home
//         </Link>
//         <Divider orientation="vertical" height="20px" borderColor="black" display={{ base: 'none', md: 'block' }} />
//         <Link href="#" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
//           About
//         </Link>
//         <Divider orientation="vertical" height="20px" borderColor="black" display={{ base: 'none', md: 'block' }} />
//         <Link href="#" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
//           Services
//         </Link>
//         <Divider orientation="vertical" height="20px" borderColor="black" display={{ base: 'none', md: 'block' }} />
//         <Link href="#" px={2} py={1} color="white" fontWeight="bold" borderRadius="md" _hover={{ textDecoration: "none" }}>
//           Contact
//         </Link>
//       </HStack>

//       {/* Centered Text */}
//       <Flex direction="column" align="center" justify="center" height="calc(70vh - 120px)" position="relative">
//         <Text fontSize={{ base: '4xl', md: '6xl' }} color="white" fontWeight="bold" textAlign="center">
//           KORA INSUTECH
//         </Text>
//         <Text fontSize={{ base: 'lg', md: '2xl' }} color="white" textAlign="center">
//           Fair Pay for Fair Play!
//         </Text>
//       </Flex>
//     </Box>
//   );
// };

// export default Header;
