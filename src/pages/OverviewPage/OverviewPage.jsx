import { Box, Button, Card, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineArrowRight } from "react-icons/ai";
import OverviewStats from "./components/OverviewStats";
import TransactionTable from "./components/TransactionTable";

const OverviewPage = () => {
  return (
    <DashboardLayout title="Overview">
      <Stack spacing="6">
        <OverviewStats />
        <Card borderRadius="1rem">
          <Box p="6">
            <Flex justify="space-between" align="center" mb="4">
              <Text fontSize="lg" fontWeight="bold">
                Recent Transactions
              </Text>
              <Button
                rightIcon={<Icon as={AiOutlineArrowRight} />}
                variant="link"
              >
                View All
              </Button>
            </Flex>
            <TransactionTable type="all" />
          </Box>
        </Card>
      </Stack>
    </DashboardLayout>
  );
};

export default OverviewPage;
