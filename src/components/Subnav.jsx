import { Box, Stack, Text, Icon, HStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { FiActivity, FiUsers, FiSettings, FiHelpCircle } from "react-icons/fi";

const Subnav = () => {
  const location = useLocation();

  // Function to check if a link is active based on pathname
  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  // Define sub-navigation links with icons and routes
  const subNavLinks = [
    {
      icon: FiActivity,
      text: "Overview",
      link: "/overview",
    },
    {
      icon: FiUsers,
      text: "Users",
      link: "/users",
    },
    {
      icon: FiSettings,
      text: "Settings",
      link: "/settings",
    },
    {
      icon: FiHelpCircle,
      text: "Help",
      link: "/help",
    },
  ];

  return (
    <Box bg="white" boxShadow="md" p="4" borderRadius="xl" w="full" mb="4">
      <Stack spacing="1">
        {subNavLinks.map((nav) => (
          <Link to={nav.link} key={nav.text}>
            <HStack
              bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
              color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
              borderRadius="10px"
              py="2"
              px="3"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
            >
              <Icon as={nav.icon} />
              <Text fontSize="sm" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Subnav;
