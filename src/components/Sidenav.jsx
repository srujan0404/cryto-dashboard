import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  // Function to check if a link is active based on pathname
  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  // Define navigation links with icons and routes
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
    {
      icon: BiSupport,
      text: "Support",
      link: "/support",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow="lg"
      w={{ base: "full", lg: "16rem" }} // Adjusted width for larger screens
      h="100vh"
    >
      <Box>
        {/* Branding/Header */}
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem" pb="4">
          SRUJAN
        </Heading>

        {/* Navigation Links */}
        <Stack spacing="1">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Stack>
      </Box>

      {/* Support Link */}
      <Box mt="auto" mb="6" mx="3">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
