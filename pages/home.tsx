import { Box, Flex, Text, Heading, Image, Center } from "@chakra-ui/react";
import img from "/imgs/img_home.gif";

const HomePage = ({ theme }) => {
  const txt_heading = {
    fontWeight: "bold",
    fontSize: 72,
  };
  const txt_body = {
    fontSize: 33,
  };
  const txt_name = {
    color: theme[1],
  };
  return (
    <>
      <Flex
        m="5% 0 5% 5%"
        justifyContent="space-between"
        h="101vh"
        overflowX="hidden"
      >
        <Center w="50%">
          <Box w="100%" mb="50%">
            <Heading style={txt_heading}>Hi!</Heading>
            <Heading style={txt_heading}>
              I'm <text style={txt_name}>Ross Enriquez</text>
            </Heading>
            <Text style={txt_body} mt="20px">
              and I like learning anything and everything about software 😁
            </Text>
          </Box>
        </Center>
        <Image ml="10%" src={img.src} boxSize="80%" objectFit="contain" />
      </Flex>
    </>
  );
};

export default HomePage;
