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
        alignItems={{ base: "center", md: "flex-start" }}
        justify="space-between"
        bg="#E8F7DD"
        px={{ base: 0, md: 200 }}
        pb={10}
      >
        {/* Image 1 */}
        <Box mb={{ base: 9, md: 0 }} width={{ base: "90%", md: "30%" }}>
          <Image
            src={Problem1}
            alt="Image 1"
            boxSize="100%"
            objectFit="cover"
            borderRadius="md"
            mb={{ base: 4, md: 0 }}
          />
          <Box
            bgGradient="linear(to-b, #204840, #708238)"
            color="white"
            p={4}
            borderRadius="md"
            width="100%"
          >
            <Text fontWeight="bold">When a peril occurs, the first respondents are typically people. In Kenya
            While this is good for the victim, it comes back to bite at them if the data they report is biased, has been manipulated.</Text>
          </Box>
        </Box>

        {/* Image 2 */}
        <Box mb={{ base: 9, md: 0 }} width={{ base: "90%", md: "30%" }}>
          <Image
            src={Problem2}
            alt="Image 2"
            boxSize="100%"
            objectFit="cover"
            borderRadius="md"
            mb={{ base: 4, md: 0 }}
          />
          <Box
            bgGradient="linear(to-b, #204840, #708238)"
            color="white"
            p={4}
            borderRadius="md"
            width="100%"
          >
            <Text fontWeight="bold">For an insurance company, by the laws of the land claims that meet criteria should be indemnified, the said client liases 
                with the first 3 responders, they will get indemnity, and a vicious cycle continues.</Text>
          </Box>
        </Box>

        {/* Image 3 */}
        <Box mb={{ base: 9, md: 0 }} width={{ base: "90%", md: "30%" }}>
          <Image
            src={Problem3}
            alt="Image 3"
            boxSize="100%"
            objectFit="cover"
            borderRadius="md"
            mb={{ base: 4, md: 0 }}
          />
          <Box
            bgGradient="linear(to-b, #204840, #708238)"
            color="white"
            p={4}
            borderRadius="md"
            width="100%"
          >
            <Text fontWeight="bold">As of 2019-2022, 39% of automotive claims escalated into court cases. This has continued to greatly deteriorate the trust levels 
            between potential policy holders and current policy holders.</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Problems;

// import React from "react";
// import { Box, Container, Text, Image, Flex } from "@chakra-ui/react";
// import Problem1 from "../images/problem1.png";
// import Problem2 from "../images/problem2.png";
// import Problem3 from "../images/problem3.png";

// const Problems = () => {
//   return (
//     <Container
//       maxW="none"
//       textAlign="center"
//       py={10}
//       px={0}
//       bgColor={"#E8F7DD"}
//     >
//       <Text fontSize="48" color="#204840" fontWeight="bold" mb={10} px={5}>
//         Problems we're Solving
//       </Text>

//       <Flex
//         direction={{ base: "column", md: "row" }}
//         alignItems="center"
//         justify="space-between"
//         bg="#E8F7DD"
//         px={{ base: 0, md: 200 }}
//         pb={10}
//       >
//         {/* Image 1 */}
//         <Box position="relative" mb={{ base: 9, md: 0 }} width={{ base: "90%", md: "30%" }}>
//           <Image
//             src={Problem1}
//             alt="Image 1"
//             boxSize="70%"
//             objectFit="cover"
//             borderRadius="md"
//           />
//           <Box
//             position="absolute"
//             bottom="-19"
//             left="50%"
//             transform="translateX(-50%)"
//             bgGradient="linear(to-b, #204840, #708238)"
//             color="white"
//             p={4}
//             borderRadius="md"
//             width="100%"
//           >
//             <Text fontWeight="bold">When a peril occurs, the first respondents are typically people. In Kenya
//             While this is good for the victim, it comes back to bite at them if the data they report is biased , has been manipulated.</Text>
//           </Box>
//         </Box>

//         {/* Image 2 */}
//         <Box position="relative" mb={{ base: 30, md:7 }} width={{ base: "90%", md: "30%" }}>
//           <Image
//             src={Problem2}
//             alt="Image 2"
//             boxSize="50%"
//             objectFit="cover"
//             borderRadius="md"
//           />
//           <Box
//             position="absolute"
//             bottom="-20"
//             left="50%"
//             transform="translateX(-50%)"
//             bgGradient="linear(to-b, #204840, #708238)"
//             color="white"
//             p={4}
//             borderRadius="md"
//             width="100%"
//           >
//             <Text fontWeight="bold">For an insurance company, by the laws of the land claims that meet criteria should be indemnified, the said client liases 
//                 with the first 3 responders, they will get indemnity, and a vicious cycle continues.</Text>
//           </Box>
//         </Box>

//         {/* Image 3 */}
//         <Box position="relative" mb={{ base: 4, md: 9 }} width={{ base: "90%", md: "30%" }}>
//           <Image
//             src={Problem3}
//             alt="Image 3"
//             boxSize="50%"
//             objectFit="cover"
//             borderRadius="md"
//           />
//           <Box
//             position="absolute"
//             bottom="-115"
//             left="50%"
//             transform="translateX(-50%)"
//             bgGradient="linear(to-b, #204840, #708238)"
//             color="white"
//             p={4}
//             borderRadius="md"
//             width="100%"
//           >
//             <Text fontWeight="bold">As of 2019-2022, 39% of automotive claims escalated into court cases. This has continued to greatly deteriorate the trust levels 
//             between potential policy holders and current policy holders.</Text>
//           </Box>
//         </Box>

//       </Flex>
//     </Container>
//   );
// };

// export default Problems;
