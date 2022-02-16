import { Box, Flex, Text, Heading, Image, Center } from "@chakra-ui/react";
import img from "/imgs/img_home.gif";

const HomePage = ({ theme }) => {
  const txt_heading = {
    fontWeight: "bold",
    fontSize: 72,
  };
  const txt_body = {
    fontSize: 32,
  };
  const txt_name = {
    color: theme[1],
  };

  return (
    <>
      <Flex
        m={["7em 0", "7em 0", "5em 0 5em 4em"]}
        justifyContent="space-between"
        display={["block", "block", "flex"]}
        overflowX="hidden"
        overflowY="hidden"
      >
        <Center w="100%" maxH="60%" p="0 1em">
          <Box w="100%" minW="400px">
            <Heading
              style={txt_heading}
              textAlign={["center", "center", "left"]}
            >
              Hi!
            </Heading>
            <Heading
              style={txt_heading}
              textAlign={["center", "center", "left"]}
            >
              I'm <text style={txt_name}>Ross Enriquez</text>
            </Heading>
            <Text
              style={txt_body}
              mt="20px"
              textAlign={["center", "center", "left"]}
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
