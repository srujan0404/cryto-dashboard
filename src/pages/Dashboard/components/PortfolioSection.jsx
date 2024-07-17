import {
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <Box bg="gray.700" borderRadius="lg" p={6} boxShadow="lg" color="white">
      <Flex
        justify="space-between"
        align={{ base: "flex-start", xl: "center" }}
        direction={{ base: "column", xl: "row" }}
        spacing={{ base: 4, xl: 0 }}
      >
        <Flex
          direction={{ base: "column", xl: "row" }}
          align={{ base: "flex-start", xl: "center" }}
          spacing={{ base: 4, xl: 16 }}
        >
          <Stack spacing={2}>
            <HStack color="gray.300">
              <Text fontSize="sm">Total Portfolio Value</Text>
              <Icon as={AiOutlineInfoCircle} />
            </HStack>
            <Text fontSize="2xl" fontWeight="bold">
              ₹ 112,312.24
            </Text>
          </Stack>

          <Stack spacing={2} mt={{ base: 4, xl: 0 }}>
            <HStack color="gray.300">
              <Text fontSize="sm">Wallet Balances</Text>
            </HStack>
            <HStack
              spacing={4}
              align={{ base: "flex-start", sm: "center" }}
              direction={{ base: "column", sm: "row" }}
            >
              <HStack>
                <Text fontSize="2xl" fontWeight="bold">
                  22.39401000
                </Text>
                <Tag colorScheme="blue" fontWeight="medium">
                  BTC
                </Tag>
              </HStack>
              <HStack>
                <Text fontSize="2xl" fontWeight="bold">
                  ₹ 1,300.00
                </Text>
                <Tag colorScheme="blue">INR</Tag>
              </HStack>
            </HStack>
          </Stack>
        </Flex>

        <HStack spacing={4} mt={{ base: 4, xl: 0 }}>
          <Button
            leftIcon={<Icon as={AiOutlineArrowDown} />}
            colorScheme="green"
            variant="solid"
          >
            Deposit
          </Button>
          <Button
            leftIcon={<Icon as={AiOutlineArrowUp} />}
            colorScheme="red"
            variant="solid"
          >
            Withdraw
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default PortfolioSection;
