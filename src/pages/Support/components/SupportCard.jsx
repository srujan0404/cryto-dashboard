import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={8}
      justify="space-between"
      align="center"
      flexDir={{ base: "column", xl: "row" }}
      bg="gray.50"
      p={8}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Stack maxW="24rem" spacing={4}>
        <Icon as={icon} boxSize={10} color="purple.600" />
        <Text fontWeight="bold" fontSize="2xl" color="gray.800">
          {title}
        </Text>
        <Text fontSize="md" color="gray.600">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
