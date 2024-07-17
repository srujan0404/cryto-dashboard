import { Box, Card, Stack, Text } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import AnalyticsChart from "./components/AnalyticsChart";

const AnalyticsPage = () => {
  return (
    <DashboardLayout title="Analytics">
      <Stack spacing="6">
        <Card borderRadius="1rem">
          <Box p="6">
            <Text fontSize="lg" fontWeight="bold" mb="4">
              Transaction Volume
            </Text>
            <AnalyticsChart type="volume" />
          </Box>
        </Card>
        <Card borderRadius="1rem">
          <Box p="6">
            <Text fontSize="lg" fontWeight="bold" mb="4">
              Revenue
            </Text>
            <AnalyticsChart type="revenue" />
          </Box>
        </Card>
      </Stack>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
