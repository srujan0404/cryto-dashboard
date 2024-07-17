import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaBars, FaUserTie } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box bg="white" boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h="16" justify="space-between" align="center">
          <HStack spacing="4">
            <Icon
              as={FaBars}
              boxSize={6}
              display={{ base: "block", lg: "none" }}
              cursor="pointer"
              onClick={onOpen}
            />
            <Heading fontSize="xl" fontWeight="medium">
              {title}
            </Heading>
          </HStack>

          <HStack spacing="4">
            <Button variant="ghost">Dashboard</Button>
            <Button variant="ghost">Analytics</Button>

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<Icon as={FaUserTie} />}
                variant="outline"
              >
                Account
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default TopNav;
