import React from "react";
import { Box, Flex, Link, Text, Stack } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <Box
      bg="gray.800"
      color="white"
      py="4"
      px={{ base: "4", md: "8" }}
      mt="auto"
      textAlign={{ base: "center", md: "left" }}
    >
      <Flex
        justify={{ base: "center", md: "space-between" }}
        align="center"
        direction={{ base: "column", md: "row" }}
        maxW="70rem"
        mx="auto"
      >
        <Stack spacing="2" direction="row" mb={{ base: "4", md: "0" }}>
          <Link href="https://github.com" isExternal>
            <FiGithub />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FiLinkedin />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FiTwitter />
          </Link>
        </Stack>
        <Text>&copy; 2024 Your Company. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
