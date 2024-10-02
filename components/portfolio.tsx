import { Box, Flex, Text, Heading, Center } from "@chakra-ui/react";
import ProjectModule from "../components/projectModule";
import projects from "../helpers/project-list";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const PortfolioPage = ({ theme, fontSizes }) => {
  const accent = {
    height: "128px",
    background: theme[2],
  };

  return (
    <>
      <Box overflowX="hidden" mb="15vh">
        <Flex mt="125px" justifyContent="space-between">
          <Slide left>
            <Box style={accent} w={["10vw", "10vw", "35vw"]} />
          </Slide>
          <Fade>
            <Heading fontWeight="bold" fontSize={fontSizes.heading} py="5%">
              Portfolio
            </Heading>
          </Fade>
          <Slide right>
            <Box style={accent} w={["10vw", "10vw", "35vw"]} />
          </Slide>
        </Flex>
        <Fade>
          <Center m="25px 0">
            <Text fontSize={fontSizes.body}>Check out some of my work!</Text>
          </Center>
        </Fade>
        <Center display={["block", "block", "flex"]}>
          <Box w={["100%", "100%", "650px"]} p="0 5%">
            <ProjectModule
              theme={theme}
              info={projects.proj_1}
              fontSizes={fontSizes}
            />
            <ProjectModule
              theme={theme}
              info={projects.proj_2}
              fontSizes={fontSizes}
            />
          </Box>
          <Box w={["100%", "100%", "650px"]} p="0 5%">
            <ProjectModule
              theme={theme}
              info={projects.proj_3}
              fontSizes={fontSizes}
            />
            <ProjectModule
              theme={theme}
              info={projects.proj_5}
              fontSizes={fontSizes}
            />
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default PortfolioPage;
