import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Tag,
  Box,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "TXN12345",
      date: "2023-07-01",
      time: "09:00 AM",
      type: {
        name: "USD Deposit",
        tag: "Bank Transfer",
      },
      amount: "+$1,200",
      status: "completed",
    },
    {
      id: "TXN12346",
      date: "2023-07-02",
      time: "10:30 AM",
      type: {
        name: "ETH Withdrawal",
        tag: "Crypto Transfer",
      },
      amount: "-2.5 ETH",
      status: "processing",
    },
    {
      id: "TXN12347",
      date: "2023-07-03",
      time: "02:00 PM",
      type: {
        name: "USD Deposit",
        tag: "Credit Card",
      },
      amount: "+$500",
      status: "pending",
    },
    {
      id: "TXN12348",
      date: "2023-07-04",
      time: "11:15 AM",
      type: {
        name: "BTC Purchase",
        tag: "Crypto Exchange",
      },
      amount: "0.05 BTC",
      status: "completed",
    },
    {
      id: "TXN12349",
      date: "2023-07-05",
      time: "04:45 PM",
      type: {
        name: "ETH Deposit",
        tag: "Crypto Transfer",
      },
      amount: "+1.0 ETH",
      status: "completed",
    },
    {
      id: "TXN12350",
      date: "2023-07-06",
      time: "08:00 AM",
      type: {
        name: "USD Withdrawal",
        tag: "Bank Transfer",
      },
      amount: "-$300",
      status: "cancelled",
    },
  ];

  const statusColor = {
    pending: "#F6E05E",
    processing: "#F687B3",
    completed: "#48BB78",
    cancelled: "#E53E3E",
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray" size="md">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="md" fontWeight="semibold">
                {data.id}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="md" fontWeight="semibold">
                    {data.date}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="md" fontWeight="semibold">
                    {data.type.name}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </Td>
              <Td fontSize="md" fontWeight="semibold">
                {data.amount}
              </Td>
              <Td>
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontSize="sm"
                  fontWeight="bold"
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
