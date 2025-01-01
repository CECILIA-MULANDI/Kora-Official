import React from "react";
import { Box, Container, Text, Image, Flex } from "@chakra-ui/react";
import Problem1 from "../images/problem1.png";
import Problem2 from "../images/problem2.png";
import Problem3 from "../images/problem3.png";

const Problems = () => {
  return (
    <Container
      maxW="none"
      textAlign="center"
      py={10}
      px={0}
      bgColor={"#E8F7DD"}
    >
      <Text fontSize="48" color="#204840" fontWeight="bold" mb={10} px={5}>
        Problems we're Solving
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="stretch"
        justify="space-between"
        bg="#E8F7DD"
        px={{ base: 4, md: 200 }}
        pb={10}
        gap={8}
      >
        {[Problem1, Problem2, Problem3].map((image, index) => (
          <Box
            key={index}
            width={{ base: "100%", md: "30%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex="1"
          >
            <Box
              width="100%"
              height="200px"
              mb={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor={"#E8F7DD"}
              borderRadius="md"
              overflow="hidden"
            >
              <Image
                src={image}
                alt={`Problem ${index + 1}`}
                objectFit="contain"
                maxHeight="100%"
                maxWidth="100%"
              />
            </Box>

            <Box
              bgGradient="linear(to-b, #204840, #708238)"
              color="white"
              p={4}
              borderRadius="md"
              width="100%"
              textAlign="left"
            >
              <Text fontWeight="bold">
                {index === 0 &&
                  "When a peril occurs, the first respondents are typically people. In Kenya, while this is good for the victim, it comes back to bite at them if the data they report is biased or manipulated."}
                {index === 1 &&
                  "For an insurance company, by the laws of the land claims that meet criteria should be indemnified. The said client liases with the first 3 responders, they will get indemnity, and a vicious cycle continues."}
                {index === 2 &&
                  "As of 2019-2022, 39% of automotive claims escalated into court cases. This has continued to greatly deteriorate the trust levels between potential policy holders and current policy holders."}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Problems;
