import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import ProfileCard from "./components/ProfileCard";

const ProfilePage = () => {
  return (
    <DashboardLayout title="Profile">
      <Stack spacing="6">
        <ProfileCard />
        <Card borderRadius="1rem">
          <Box p="6">
            <Text fontSize="lg" fontWeight="bold" mb="4">
              Edit Profile
            </Text>
            <Stack spacing="4">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Your Password" />
              </FormControl>
              <Flex justify="end">
                <Button colorScheme="blue">Save Changes</Button>
              </Flex>
            </Stack>
          </Box>
        </Card>
      </Stack>
    </DashboardLayout>
  );
};

export default ProfilePage;
