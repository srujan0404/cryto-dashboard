import { SimpleGrid } from "@chakra-ui/react";
import StatCard from "./StatCard"; 

const TransactionStatsPage = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
      <StatCard label="Successful Transactions" value="750" />
      <StatCard label="Failed Transactions" value="20" />
      <StatCard label="Pending Transactions" value="30" />
      <StatCard label="Total Transactions" value="800" />
    </SimpleGrid>
  );
};

export default TransactionStatsPage;
