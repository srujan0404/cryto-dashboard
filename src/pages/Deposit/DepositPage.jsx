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
  Box,
  Text,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import TransactionTable from "./components/TransactionTable";

const DepositPage = () => {
  return (
    <DashboardLayout title="Deposits">
      <Box p={6} maxW="6xl" mx="auto">
        <Flex justify="space-between" align="center" mb={6}>
          <InputGroup maxW="300px">
            <InputLeftElement pointerEvents="none" color="gray.500">
              <Icon as={BsSearch} />
            </InputLeftElement>
            <Input type="text" placeholder="Search transactions..." />
          </InputGroup>
          <Button
            leftIcon={<Icon as={AiOutlineDownload} />}
            colorScheme="purple"
          >
            Export CSV
          </Button>
        </Flex>
        <Card borderRadius="lg" boxShadow="lg" p={6}>
          <TransactionTable type="deposit" />
        </Card>
      </Box>
    </DashboardLayout>
  );
};

export default DepositPage;
