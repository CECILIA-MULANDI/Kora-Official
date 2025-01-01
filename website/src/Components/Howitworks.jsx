// HowItWorks.js
import React from 'react';
import { Box, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';
import Install from '../images/install.png';
import Monitor from '../images/monitor.jpg';
import Approve from '../images/approve.jpg';

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1",
      description: "Installation of telematics bots to policy holders.",
      image: Install
    },
    {
      title: "Step 2",
      description: "Monitoring user dashboard driving habits.",
      image: Monitor
    },
    {
      title: "Step 3",
      description: "In the case of a peril, trigger escrow funds, approval on Company's end according to contract terms.",
      image: Approve
    }
  ];

  return (
    <Box py={10} bg="white">
      <Box maxW="1500px" mx="auto" px={4}>
        <Heading mb={8} color="#204840">
          The technology: IoT(Telematics) + Smart Contracts
        </Heading>
        <Heading
          as="h2"
          size="xl"
          color="#000000"
          mt={10}
          mb={5}
          textAlign="center"
        >
          How it Works
        </Heading>
        <SimpleGrid columns={[1, 3]} spacing={8}>
          {steps.map((step, index) => (
            <Box
              key={index}
              textAlign="center"
              border="1px solid #e2e2e2"
              borderRadius="8px"
              p={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="150px" // Fixed height
                width="100%"
                mb={4}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  maxHeight="100%"
                  maxWidth="100%"
                  objectFit="contain" // Ensures the image scales properly
                />
              </Box>
              <Heading size="md" mb={2}>{step.title}</Heading>
              <Text minH="80px">{step.description}</Text> {/* Ensure uniform height */}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HowItWorks;
