import { Box, Flex, Text, Heading, Center } from "@chakra-ui/react";
import ProjectModule from "../components/projectModule";
import img from "/imgs/test-proj.png";
import indilator from "/imgs/proj_indilator.png";
import valorant from "/imgs/proj_valorant.jpg";
import weatherapp from "/imgs/proj_weatherapp.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const PortfolioPage = ({ theme, fontSizes }) => {
  const accent = {
    height: "128px",
    background: theme[2],
  };
  const projects = {
    proj_1: {
      name: "Indilator",
      tools: "NextJS, MongoDB",
      desc: "A web app that translates words between English, Ojibway, and Mohawk that aims to preserve the language of Indigenous communities.",
      img: indilator.src,
      link: "https://github.com/joeelmahallawy/rec-repo",
    },
    proj_2: {
      name: "VALORANT Tracker",
      tools: "Python, Discord API",
      desc: "A Discord bot that fetches data from a VALORANT statistics tracker and displays them in embedded Discord messages.",
      img: valorant.src,
      link: "https://github.com/RossEnriquez/VALORANT-Stat-Tracker",
    },
    proj_3: {
      name: "Weather App",
      tools: "NextJS",
      desc: "A web app that fetches the weather forecast for the next six days using the user’s location and displays it on a modern UI.",
      img: weatherapp.src,
      link: "https://github.com/RossEnriquez/weather-app",
    },
    proj_4: {
      name: "General Processing Unit",
      tools: "VHDL",
      desc: "A functional General Processing Unit (GPU) implemented using latches, 4x16 decoders, FSMs, and an ALU to output 15 user-defined functions.",
      img: img.src,
      link: "#",
    },
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
            <Text fontSize={fontSizes.body}>
              Here's a look at what I've built so far!
            </Text>
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
              info={projects.proj_4}
              fontSizes={fontSizes}
            />
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default PortfolioPage;
