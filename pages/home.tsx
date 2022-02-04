import { Box, Button, Flex, Text, Heading, Image } from "@chakra-ui/react";
import headshot from "/imgs/ross.jpg";

const HomePage = ({ theme }) => {
  const txt_heading = {
    fontWeight: "bold",
    fontSize: 72,
  };
  const txt_body = {
    fontSize: 33,
  };
  return (
    <>
      <Flex m="125px" justifyContent="space-between" h="101vh">
        <Box w="50%">
          <Heading style={txt_heading}>Hi!</Heading>
          <Heading style={txt_heading}>I'm Ross</Heading>
          <Text style={txt_body} mt="20px">
            and I like learning anything and everything about software 😁
          </Text>
        </Box>
        <Image src={headshot.src} boxSize="70%" objectFit="contain" />
      </Flex>
    </>
  );
};

export default HomePage;
