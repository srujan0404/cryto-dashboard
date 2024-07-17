import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormLabel,
  Heading,
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
        <Card borderRadius="xl" boxShadow="md" p="6">
          <Stack spacing="6">
            <Heading as="h2" size="lg" mb="4" color="teal.500">
              Edit Profile
            </Heading>
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
              <Flex justify="flex-end">
                <Button colorScheme="teal" variant="solid">
                  Save Changes
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </DashboardLayout>
  );
};

export default ProfilePage;
