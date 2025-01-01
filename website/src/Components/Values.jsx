import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Image,
  Center,
} from "@chakra-ui/react";
import Value1 from "../images/software.jpeg";
import Value2 from "../images/hardware.jpeg";
import Value3 from "../images/dashboard2.jpeg";
import Value4 from "../images/data2.jpeg";

const AboutUs = () => {
  return (
    <Container
      maxW="none"
      p={0}
      marginX={0}
      style={{ fontFamily: "Avenir, sans-serif" }}
    >
      <Center>
        <Box py={6} px={14}>
          <Heading
            as="h2"
            size="xl"
            color="#000000"
            mt={10}
            textAlign="center"
          >
            Value Proposition
          </Heading>
        </Box>
      </Center>

      <Flex
        direction={{ base: "column", md: "column" }}
        align="center"
        justify="space-around"
        py={10}
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "right" }}
          mt={{ base: 0, md: 0 }}
          alignItems="center"
          justifyContent="space-between"
          py={10}
          px={{ base: 10, md: 40 }}
        >
          <Image
            src={Value1}
            alt="Value 1 Image"
            boxSize={{ base: "100%", md: "30%" }}
            objectFit="cover"
            loading="lazy"
            mb={{ base: 4, md: 0 }}
          />
          <Box ml={{ base: 0, md: 8 }} maxWidth={{ base: "100%", md: "45%" }}>
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              color="#204840"
              mt={4}
              mb={4}
              textAlign={"left"}
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              Software
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#312B2D"
              textAlign={"left"}
            >
              Kora onboards insurance policies as smart contracts that are immutable and transparent.
            </Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "right" }}
          mt={{ base: 8, md: 0 }}
          alignItems="center"
          justifyContent="space-between"
          backgroundColor={"#E8F7DD"}
          py={10}
          px={{ base: 10, md: 40 }}
          maxWidth={{ base: "100%", md: "100%" }}
        >
          <Box ml={{ base: 0, md: 8 }} maxWidth={{ base: "100%", md: "45%" }}>
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              color="#204840"
              mt={4}
              mb={4}
              textAlign={"left"}
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              IoT Customising
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#312B2D"
              textAlign={"left"}
            >
              Once we on board your clients policies, we will install high level telematics on their cars that pick real time data upto 1 minute old and support biometrics 
              features as per the agreed package.
            </Text>
          </Box>
          <Image
            src={Value2}
            alt="Value 2 Image"
            boxSize={{ base: "100%", md: "30%" }}
            objectFit="cover"
            loading="lazy"
            pb={{ base: 4, md: 4 }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "right" }}
          mt={{ base: 8, md: 0 }}
          alignItems="center"
          justifyContent="space-between"
          py={10}
          px={{ base: 10, md: 40 }}
        >
          <Image
            src={Value3}
            alt="Value 3 Image"
            boxSize={{ base: "100%", md: "30%" }}
            objectFit="cover"
            loading="lazy"
            mb={{ base: 4, md: 0 }}
          />
          <Box ml={{ base: 0, md: 8 }} maxWidth={{ base: "100%", md: "45%" }}>
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              color="#204840"
              mt={4}
              mb={4}
              textAlign={"left"}
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              Dashboard Monitoring
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#312B2D"
              textAlign={"left"}
            >
              Going forward, we will closdely monitor, their accelaration patterns, their frequent location roads as necessary pointers for when a peril occurs.
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "right" }}
          mt={{ base: 8, md: 0 }}
          alignItems="center"
          justifyContent="space-between"
          backgroundColor={"#E8F7DD"}
          py={10}
          px={{ base: 10, md: 40 }}
          maxWidth={{ base: "100%", md: "100%" }}
        >
          <Box ml={{ base: 0, md: 8 }} maxWidth={{ base: "100%", md: "45%" }}>
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              color="#204840"
              mt={4}
              mb={4}
              textAlign={"left"}
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              Data Interpretation
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#312B2D"
              textAlign={"left"}
            >
              When a peril occuras, our bots trigger our smart contracts which in turn ping our dashboard and your firm is alerted to set aside funds according to the 
              clients contract. Payable upon confirmation by your underwriters.
            </Text>
          </Box>
          <Image
            src={Value4}
            alt="Value 4 Image"
            boxSize={{ base: "100%", md: "30%" }}
            objectFit="cover"
            loading="lazy"
            pb={{ base: 4, md: 4 }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutUs;


