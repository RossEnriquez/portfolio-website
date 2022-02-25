import { Box, Flex, Heading, Center } from "@chakra-ui/react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import SocialsCard from "../components/socialsCard";

const ConnectPage = ({ theme }) => {
  const txt_heading = {
    fontWeight: "bold",
    fontSize: 72,
  };
  const txt_body = {
    fontSize: 33,
  };
  const accent = {
    height: "128px",
    background: theme[2],
  };
  return (
    <>
      <Box overflowX="hidden">
        <Flex>
          <Slide left>
            <Box style={accent} w={["10vw", "10vw", "60vw"]} mr="3vw" />
          </Slide>
          <Fade>
            <Heading style={txt_heading} alignSelf="center">
              Let's Connect!
            </Heading>
          </Fade>
        </Flex>
        <Center p="5% 0">
          <SocialsCard theme={theme} />
        </Center>
      </Box>
    </>
  );
};

export default ConnectPage;
