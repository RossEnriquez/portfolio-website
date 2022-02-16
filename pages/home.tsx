import { Box, Flex, Text, Heading, Image, Center } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import img from "/imgs/img_home.gif";

const HomePage = ({ theme, breakpoints }) => {
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
        m={{ sm: "5em 0 5em 0", md: "5em 0 5em 4em" }}
        justifyContent="space-between"
        display={{ sm: "block", md: "flex" }}
        h="101vh"
        overflowX="hidden"
      >
        <Center w="100%" maxH="60%">
          <Box w="100%" minW="400px">
            <Heading
              style={txt_heading}
              textAlign={{ sm: "center", md: "left" }}
            >
              Hi!
            </Heading>
            <Heading
              style={txt_heading}
              textAlign={{ sm: "center", md: "left" }}
            >
              I'm <text style={txt_name}>Ross Enriquez</text>
            </Heading>
            <Text
              style={txt_body}
              mt="20px"
              textAlign={{ sm: "center", md: "left" }}
            >
              and I like learning anything and everything about software 😁
            </Text>
          </Box>
        </Center>
        <Center>
          <Image src={img.src} minW="500px" maxW="900px" objectFit="contain" />
        </Center>
      </Flex>
    </>
  );
};

export default HomePage;
