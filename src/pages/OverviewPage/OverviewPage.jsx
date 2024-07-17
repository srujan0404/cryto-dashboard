import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineArrowRight } from "react-icons/ai";
import OverviewStats from "./components/OverviewStats";
import TransactionTable from "./components/TransactionTable";

const OverviewPage = () => {
  return (
    <DashboardLayout title="Overview">
      <Stack spacing="6">
        <Box bg="white" boxShadow="md" p="6" borderRadius="xl">
          <Heading as="h2" size="lg" mb="4" color="teal.500">
            Overview Statistics
          </Heading>
          <OverviewStats />
        </Box>

        <Box bg="white" boxShadow="md" p="6" borderRadius="xl">
          <Flex justify="space-between" align="center" mb="4">
            <Heading as="h2" size="lg" color="teal.500">
              Recent Transactions
            </Heading>
            <Button
              rightIcon={<Icon as={AiOutlineArrowRight} />}
              variant="link"
              color="teal.500"
            >
              View All
            </Button>
          </Flex>
          <TransactionTable type="all" />
        </Box>
      </Stack>
    </DashboardLayout>
  );
};

export default OverviewPage;
