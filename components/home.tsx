import { Box, Flex, Text, Heading, Image, Center } from "@chakra-ui/react";
import img from "/imgs/img_home.gif";

const HomePage = ({ theme, fontSizes }) => {
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
              fontWeight="bold"
              fontSize={fontSizes.heading}
              textAlign={["center", "center", "left"]}
            >
              Hi!
            </Heading>
            <Heading
              fontWeight="bold"
              fontSize={fontSizes.heading}
              textAlign={["center", "center", "left"]}
            >
              I'm <text style={{ color: theme[1] }}>Ross Enriquez</text>
            </Heading>
            <Text
              fontSize={32}
              mt="20px"
              textAlign={["center", "center", "left"]}
            >
              and I like learning anything and everything about software 😁
            </Text>
          </Box>
        </Center>
        <Center pl={[10, 0, 0]}>
          <Image src={img.src} minW="500px" maxW="900px" objectFit="contain" />
        </Center>
      </Flex>
    </>
  );
};

export default HomePage;
