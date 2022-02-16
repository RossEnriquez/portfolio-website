import { Box, Flex, Heading, Center } from "@chakra-ui/react";
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
      <Box overflowX="hidden" h="100vh">
        <Flex>
          <Box
            style={accent}
            w="65%"
            mr="3%"
            data-aos="slide-right"
            data-aos-anchor-placement="top-center"
          />
          <Heading
            style={txt_heading}
            alignSelf="center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            Let's Connect!
          </Heading>
        </Flex>
        <Center m="5% 0">
          <SocialsCard theme={theme} />
        </Center>
      </Box>
    </>
  );
};

export default ConnectPage;
