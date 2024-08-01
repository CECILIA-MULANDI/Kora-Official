import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "@chakra-ui/react";
import HomeImage2 from "../images/whynow.png";
// import "../../styles/fonts.css";

const FlexSection = () => {
  return (
    <Container
      maxW="none"
      pt={120}
      pb={100}
      style={{ fontFamily: "Avenir, sans-serif" }}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
        gap="30px"
        px={{ base: 0, md: 130 }}
      >
        <Image
          src={HomeImage2}
          alt="Flex Section Image"
          boxSize={{ base: "100%", md: "40%" }}
          borderRadius="md"
          loading="lazy"
        />

        <Box
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          ml={{ base: 0, md: 8 }}
          mb={{ base: 8, md: 0 }}
        >
          <Heading
            as="h2"
            size="2xl"
            color="#204840"
            mb={50}
            style={{ fontFamily: "Avenir, sans-serif" }}
          >
            Why Now?
          </Heading>
          <Text color="#312B2D" fontsize="20">
            The growing working population Across Africa, has left for a need of reliable and dependable insurance. 
            In addition, the rising cases of unsettled insurance claims is alarming and calls to be nipped in the bud.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default FlexSection;
