import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex minH="100vh">
      {/* Side Navigation - Visible on larger screens */}
      <Box display={{ base: "none", lg: "block" }} w="250px" bg="gray.800">
        <Sidenav />
      </Box>

      {/* Side Drawer - Hidden by default, visible on smaller screens */}
      <SideDrawer isOpen={isOpen} onClose={onClose} />

      {/* Main Content Area */}
      <Box flex="1">
        {/* Top Navigation Bar */}
        <TopNav title={title} onOpen={onOpen} />

        {/* Main Content Container */}
        <Container
          maxW="100%"
          px={{ base: "4", lg: "8" }} // Adjusted padding for responsiveness
          pt="6"
          pb="4"
          overflowX="hidden"
          overflowY="auto"
          minHeight="calc(100vh - 88px)" // Adjusted height calculation
          mt={{ base: "3", lg: "0" }} // Adjusted top margin for smaller screens
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
