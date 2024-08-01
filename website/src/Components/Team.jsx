// Team.js
import React from 'react';
import { Box, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';
import Wanjiru from '../images/wanjiru.png';
import Cecilia from '../images/cecilia.png';
import Susan from '../images/susan.png';
import Lynette from '../images/lynette.png';

const Team = () => {
  const team = [
    {
      name: "Wanjiru Kiarie",
      role: "Actuary | Developer",
      image: Wanjiru
    },
    {
      name: "Cecilia Mulandi",
      role: "Frontend Developer",
      image: Cecilia
    },
    {
      name: "Susan Wambui",
      role: "Team Manager",
      image: Susan
    },
    {
      name: "Lynette Wanjiru",
      role: "Backend Developer",
      image: Lynette
    }
  ];

  return (
    <Box py={16} bg="gray.100">
      <Box maxW="1200px" mx="auto" px={4}>
        <Heading mb={8}>Our Team</Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          {team.map((member, index) => (
            <Box key={index} textAlign="center">
              <Image src={member.image} alt={member.name} borderRadius="full" mb={4} />
              <Heading size="md" mb={2}>{member.name}</Heading>
              <Text>{member.role}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Team;