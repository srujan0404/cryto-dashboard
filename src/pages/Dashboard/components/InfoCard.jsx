import { Tag, Text, Box } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "purple.800" : "gray.50"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      color={inverted ? "white" : "gray.800"}
    >
      <Tag
        color={inverted ? "purple.800" : "white"}
        bg={inverted ? "white" : "purple.800"}
        borderRadius="full"
        px={4}
        py={1}
      >
        {tagText}
      </Tag>
      <Text
        mt={4}
        fontWeight="bold"
        fontSize="lg"
        color={inverted ? "white" : "gray.800"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
