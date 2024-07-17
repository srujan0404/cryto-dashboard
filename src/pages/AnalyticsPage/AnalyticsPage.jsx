import { Box, Card, Grid, GridItem, Heading } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import AnalyticsChart from "./components/AnalyticsChart";

const AnalyticsPage = () => {
  return (
    <DashboardLayout title="Analytics">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <GridItem>
          <Card borderRadius="xl" boxShadow="lg" p={6}>
            <Heading as="h2" size="md" mb={4} color="purple.500">
              Transaction Volume
            </Heading>
            <Box>
              <AnalyticsChart type="volume" />
            </Box>
          </Card>
        </GridItem>
        <GridItem>
          <Card borderRadius="xl" boxShadow="lg" p={6}>
            <Heading as="h2" size="md" mb={4} color="purple.500">
              Revenue
            </Heading>
            <Box>
              <AnalyticsChart type="revenue" />
            </Box>
          </Card>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
