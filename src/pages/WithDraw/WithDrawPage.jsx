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
import { BsSearch } from "react-icons/bs";
import TransactionTable from "./components/TransactionTable";

const WithdrawPage = () => {
  return (
    <DashboardLayout title="Withdrawals">
      <Flex justify="space-between" align="center" mt="6" mb="3">
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
        <TransactionTable type="withdraw" />
      </Card>
    </DashboardLayout>
  );
};

export default WithdrawPage;
