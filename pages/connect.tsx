import { Box, Flex, Heading, Center } from "@chakra-ui/react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import SocialsCard from "../components/socialsCard";

const ConnectPage = ({ theme, breakpoints }) => {
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
            <Box
              style={accent}
              w="60vw"
              mr="3vw"
              // data-aos="slide-right"
              // data-aos-anchor-placement="top-center"
            />
          </Slide>
          <Fade>
            <Heading
              style={txt_heading}
              alignSelf="center"
              // data-aos="fade-up"
              // data-aos-anchor-placement="top-center"
            >
              Let's Connect!
            </Heading>
          </Fade>
        </Flex>
        <Center m="5% 0">
          <SocialsCard theme={theme} />
        </Center>
      </Box>
    </>
  );
};

export default ConnectPage;
