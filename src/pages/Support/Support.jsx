import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack, Box, Text, Button } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing={12} align="center" maxW="6xl" mx="auto" px={4} py={8}>
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <Box
              p={8}
              borderRadius="lg"
              bg="white"
              boxShadow="lg"
              textAlign="center"
            >
              <InfoCard
                inverted={true}
                tagText="Contact"
                imgUrl="/grid_bg.svg"
                text="Learn more about our real estate, mortgage, and corporate account services."
              />
            </Box>
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
        />
        <Box
          p={10}
          borderRadius="lg"
          bg="white"
          boxShadow="lg"
          textAlign="center"
          maxW="lg"
          w="full"
        >
          <Text fontWeight="bold" fontSize="2xl" color="gray.800">
            FAQ
          </Text>
          <Text fontSize="lg" color="gray.600" mt={4}>
            Check out our frequently asked questions for quick answers to your
            queries.
          </Text>
          <Button mt={6} colorScheme="purple">
            View FAQs
          </Button>
        </Box>
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
