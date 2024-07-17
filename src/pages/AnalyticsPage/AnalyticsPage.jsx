import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import AnalyticsChart from "./components/AnalyticsChart";

const AnalyticsPage = () => {
  return (
    <DashboardLayout title="Analytics">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <GridItem>
          <Card borderRadius="1rem" boxShadow="md" p="6">
            <Heading as="h3" size="md" mb="4" color="teal.500">
              Transaction Volume
            </Heading>
            <AnalyticsChart type="volume" />
          </Card>
        </GridItem>
        <GridItem>
          <Card borderRadius="1rem" boxShadow="md" p="6">
            <Heading as="h3" size="md" mb="4" color="teal.500">
              Revenue
            </Heading>
            <AnalyticsChart type="revenue" />
          </Card>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
