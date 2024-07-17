import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p={8} borderRadius="lg" boxShadow="lg" bg="gray.50">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="md" color="gray.700">
          You will receive a response within 24 hours of submitting.
        </Text>

        <HStack flexDir={{ base: "column", md: "row" }} spacing={4}>
          <FormControl>
            <FormLabel color="gray.700">First Name</FormLabel>
            <Input placeholder="Enter Your First Name" bg="white" />
          </FormControl>
          <FormControl>
            <FormLabel color="gray.700">Last Name</FormLabel>
            <Input placeholder="Enter Your Last Name" bg="white" />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel color="gray.700">Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email" bg="white" />
        </FormControl>

        <FormControl>
          <FormLabel color="gray.700">Message</FormLabel>
          <Textarea placeholder="Enter Your Message" bg="white" />
        </FormControl>

        <Checkbox defaultChecked colorScheme="purple">
          <Text fontSize="sm" color="gray.700">
            I agree with
            <Box as="span" color="purple.600" ml={1}>
              Terms & Conditions
            </Box>
            .
          </Text>
        </Checkbox>

        <Stack spacing={4}>
          <Button fontSize="md" colorScheme="purple">
            Send a Message
          </Button>
          <Button fontSize="md" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
