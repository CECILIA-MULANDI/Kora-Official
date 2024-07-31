import React from 'react';
import { Box, Flex, Text, Link, HStack, Divider, Icon } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import BackgroundImg from '../images/Designer.jpeg';

const Header = () => {
  return (
    <Box position="relative" height="70vh">
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
        <Flex align="center" ml={40}>
          <Text fontSize="2xl" fontWeight="bold" color="black">KORA</Text>
        </Flex>
        <Flex align="center" mr={40}>
          <Icon as={PhoneIcon} w={6} h={6} mr={2} />
          <Text>+1 (123) 456-7890</Text>
        </Flex>
      </Flex>

      {/* Separator Line */}
      <Flex justify="center" position="relative">
        <Divider borderColor="black" width="70%" />
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
      <Flex direction="column" align="center" justify="center" height="calc(70vh - 120px)" position="relative">
        <Text fontSize="6xl" color="white" fontWeight="bold">
          KORA INSUTECH
        </Text>
        <Text fontSize="2xl" color="white">
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
//     <Box position="relative" height="70vh">
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
//       <Flex p={4} justify="space-between" align="center" position="relative">
//         <Flex align="center" ml={40}>
//           <Text fontSize="2xl" fontWeight="bold" color="black">KORA</Text>
//         </Flex>
//         <Flex align="center" mr={40}>
//           <Icon as={PhoneIcon} w={6} h={6} mr={2} />
//           <Text>+1 (123) 456-7890</Text>
//         </Flex>
//       </Flex>

//       {/* Separator Line */}
//       <Flex justify="center" position="relative">
//         <Divider borderColor="black" width="70%" />
//       </Flex>

//       {/* Navigation Bar */}
//       <HStack
//         as="nav"
//         spacing={4}
//         p={4}
//         bg="rgba(0, 128, 0, 0.5)"
//         width="70%"
//         margin="0 auto"
//         justify="space-between"
//         position="relative"
//       >
//         <Link href="#" px={2} py={1} borderRadius="md" _hover={{ textDecoration: "none" }}>
//           Home
//         </Link>
//         <Divider orientation="vertical" height="20px" borderColor="black" />
//         <Link href="#" px={2} py={1} borderRadius="md" _hover={{ textDecoration: "none" }}>
//           About
//         </Link>
//         <Divider orientation="vertical" height="20px" borderColor="black" />
//         <Link href="#" px={2} py={1} borderRadius="md" _hover={{ textDecoration: "none" }}>
//           Services
//         </Link>
//         <Divider orientation="vertical" height="20px" borderColor="black" />
//         <Link href="#" px={2} py={1} borderRadius="md" _hover={{ textDecoration: "none" }}>
//           Contact
//         </Link>
//       </HStack>

//       {/* Centered Text */}
//       <Flex direction="column" align="center" justify="center" height="calc(70vh - 120px)" position="relative">
//         <Text fontSize="6xl" color="white" fontWeight="bold">
//           KORA INSUTECH
//         </Text>
//         <Text fontSize="2xl" color="white">
//           Fair Pay for Fair Play!
//         </Text>
//       </Flex>
//     </Box>
//   );
// };

// export default Header;
