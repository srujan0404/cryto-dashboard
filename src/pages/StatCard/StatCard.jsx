import { Box, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const StatCard = ({ label, value }) => (
  <Box
    p="4"
    bg="white"
    borderRadius="md"
    boxShadow="md"
    borderWidth="1px"
    borderColor="gray.200"
  >
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
    </Stat>
  </Box>
);

export default StatCard;
