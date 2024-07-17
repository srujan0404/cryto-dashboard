import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  const cardBg = useColorModeValue("gray.800", "gray.700");
  const iconBg = useColorModeValue("gray.600", "gray.600");
  const textColor = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");
  const timestampColor = useColorModeValue("whiteAlpha.700", "whiteAlpha.700");

  return (
    <CustomCard
      bg={cardBg}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      color={textColor}
    >
      <Text mb={6} fontSize="lg" fontWeight="bold">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider borderColor={timestampColor} />}
            <Flex gap={4} align="center">
              <Grid
                placeItems="center"
                bg={iconBg}
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} color="white" />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text fontSize="md" fontWeight="bold">
                    {transaction.text}
                  </Text>
                  <Text fontSize="sm" color={timestampColor}>
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text fontSize="md" fontWeight="bold">
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt={6} colorScheme="blue">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
