import { SimpleGrid } from "@chakra-ui/react";
import StatCard from "./StatCard";

const OverviewStats = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
      <StatCard label="Total Balance" value="$50,000" />
      <StatCard label="Total Deposits" value="$20,000" />
      <StatCard label="Total Withdrawals" value="$10,000" />
      <StatCard label="Total Trades" value="500" />
    </SimpleGrid>
  );
};

export default OverviewStats;
