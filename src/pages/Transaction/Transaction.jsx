import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="space-between" align="center" mt="6" mb="3">
        <HStack spacing="4">
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              size="sm"
              variant="outline"
              colorScheme="gray"
              borderRadius="full"
            >
              {tab.name}{" "}
              <Tag ml="1" colorScheme="gray">
                {tab.count}
              </Tag>
            </Button>
          ))}
        </HStack>
        <InputGroup maxW="200px">
          <InputLeftElement pointerEvents="none" color="gray.500">
            <Icon as={BsSearch} />
          </InputLeftElement>
          <Input type="text" placeholder="Search..." />
        </InputGroup>
        <Button leftIcon={<Icon as={AiOutlineDownload} />} size="sm">
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="xl" p="6">
        <Tabs variant="soft-rounded">
          <TabList>
            {tabs.map((tab) => (
              <Tab key={tab.name}>{tab.name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabs.map((tab) => (
              <TabPanel key={tab.name}>
                <TransactionTable type={tab.name.toLowerCase()} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
