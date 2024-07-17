import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard bg="gray.800" p={6} borderRadius="lg" boxShadow="lg">
      <Flex justify="space-between" align="start" mb={6}>
        <Stack spacing={4}>
          <Text fontSize="lg" color="whiteAlpha.900" fontWeight="bold">
            Wallet Balances
          </Text>
          <HStack spacing={4} align="center">
            <Text textStyle="h2" fontWeight="bold" color="whiteAlpha.900">
              22.39401000
            </Text>
            <HStack fontWeight="medium" color="green.400">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="sm" fontWeight="medium">
                22%
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack spacing={4}>
          <Button
            leftIcon={<Icon as={AiFillPlusCircle} />}
            colorScheme="green"
            variant="solid"
          >
            Buy
          </Button>
          <Button
            leftIcon={<Icon as={AiOutlineMinusCircle} />}
            colorScheme="red"
            variant="solid"
          >
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="enclosed">
        <Flex justify="end" mb={4}>
          <TabList>
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "blue.500", color: "white" }}
                key={tab}
                fontSize="sm"
                borderRadius="md"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt={8} />
            <HStack justify="space-between" mt={4}>
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="whiteAlpha.700">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Text color="whiteAlpha.900">Two!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
