import {
  Button,
  Card,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import TransactionTable from "./components/TransactionTable";

const TradePage = () => {
  return (
    <DashboardLayout title="Trades">
      <Stack spacing="6">
        <Flex justify="space-between" align="center">
          <InputGroup maxW="300px">
            <InputLeftElement pointerEvents="none" color="gray.400">
              <Icon as={BsSearch} />
            </InputLeftElement>
            <Input type="text" placeholder="Search..." />
          </InputGroup>
          <Button
            leftIcon={<Icon as={AiOutlineDownload} />}
            size="sm"
            colorScheme="teal"
          >
            Export CSV
          </Button>
        </Flex>
        <Card borderRadius="xl" boxShadow="md" p="6">
          <TransactionTable type="trade" />
        </Card>
      </Stack>
    </DashboardLayout>
  );
};

export default TradePage;
