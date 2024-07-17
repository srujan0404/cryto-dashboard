import {
  Button,
  Card,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import TransactionTable from "./components/TransactionTable";

const DepositPage = () => {
  return (
    <DashboardLayout title="Deposits">
      <Flex direction="column" p={6} maxW="6xl" mx="auto">
        <Flex justify="space-between" align="center" mb={6}>
          <InputGroup maxW="300px">
            <InputLeftElement pointerEvents="none" color="gray.400">
              <Icon as={BsSearch} />
            </InputLeftElement>
            <Input type="text" placeholder="Search transactions..." />
          </InputGroup>
          <Button
            leftIcon={<Icon as={AiOutlineDownload} />}
            colorScheme="purple"
            variant="solid"
          >
            Export CSV
          </Button>
        </Flex>
        <Card borderRadius="xl" boxShadow="md" p={6}>
          <TransactionTable type="deposit" />
        </Card>
      </Flex>
    </DashboardLayout>
  );
};

export default DepositPage;
