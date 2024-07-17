import { Box, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const OverviewStats = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
      <StatCard label="Total Balance" value="$50,000" />
      <StatCard label="Total Deposits" value="$20,000" />
      <StatCard label="Total Withdrawals" value="$10,000" />
      <StatCard label="Total Trades" value="500" />
    </SimpleGrid>
  );
};

const StatCard = ({ label, value }) => (
  <Box
    p="6"
    border="1px"
    borderColor="gray.200"
    borderRadius="lg"
    bg="white"
    shadow="sm"
  >
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
    </Stat>
  </Box>
);

export default OverviewStats;
