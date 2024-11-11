import React from 'react';
import { Box, Text, HStack, VStack, Link, Icon } from '@chakra-ui/react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  return (
    <Box bg="#204840" py={8} color="white">
      <Box maxW="1200px" mx="auto" px={4}>
        {/* Main Footer Content */}
        <VStack spacing={4} textAlign="center">
          {/* Company Info */}
          <Text fontSize="lg" fontWeight="bold">
            KORA INSUTECH
          </Text>
          <Text fontSize="sm">
            Fair Pay for Fair Play!
          </Text>

          {/* Quick Links */}
          <HStack spacing={8} fontSize="sm">
            <Link href="/about" _hover={{ textDecoration: "underline" }}>
              About Us
            </Link>
            <Link href="/services" _hover={{ textDecoration: "underline" }}>
              Services
            </Link>
            <Link href="/contact" _hover={{ textDecoration: "underline" }}>
              Contact
            </Link>
            <Link href="/privacy-policy" _hover={{ textDecoration: "underline" }}>
              Privacy Policy
            </Link>
          </HStack>

          {/* Social Media Links */}
          <HStack spacing={4} mt={4}>
            <Link href="mailto:korainsutech@gmail.com" isExternal>
              <Icon as={FaEnvelope} boxSize={5} _hover={{ color: "gray.300" }} />
            </Link>
            <Link href="https://x.com/korainsutecH" isExternal>
              <Icon as={FaXTwitter} boxSize={5} _hover={{ color: "gray.300" }} />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={5} _hover={{ color: "gray.300" }} />
            </Link>
            <Link href="https://www.linkedin.com/company/kora-insurtech/" isExternal>
              <Icon as={FaLinkedinIn} boxSize={5} _hover={{ color: "gray.300" }} />
            </Link>
          </HStack>

          {/* Copyright */}
          <Text fontSize="xs" mt={4}>
            &copy; 2024 KORA INSUTECH. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Footer;
