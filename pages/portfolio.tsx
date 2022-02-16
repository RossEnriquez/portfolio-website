import { Box, Flex, Text, Heading, Center } from "@chakra-ui/react";
import ProjectModule from "../components/projectModule";
import img from "/imgs/test-proj.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const PortfolioPage = ({ theme }) => {
  const txt_heading = {
    fontWeight: "bold",
    fontSize: 72,
  };
  const txt_body = {
    fontSize: 33,
  };
  const txt_bold = {
    fontWeight: "bold",
    color: theme[3],
  };
  const accent = {
    height: "128px",
    background: theme[2],
  };

  const projects = {
    proj_1: {
      name: "Indilator",
      tools: "React, MongoDB",
      desc: "A web app that translates words between English, Ojibway, and Mohawk that aims to preserve the language of Indigenous communities.",
      img: img.src,
      link: "https://github.com/joeelmahallawy/rec-repo",
    },
    proj_2: {
      name: "VALORANT Statistics Tracker",
      tools: "Python, Discord API",
      desc: "A Discord bot that fetches data from a VALORANT statistics tracker and displays them in embedded Discord messages.",
      img: img.src,
      link: "https://github.com/RossEnriquez/VALORANT-Stat-Tracker",
    },
    proj_3: {
      name: "Weather App",
      tools: "React",
      desc: "A web app that fetches the weather forecast for the next six days using the user’s location and displays it on a modern UI.",
      img: img.src,
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
            <Box
              style={accent}
              w="35vw"
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
              Portfolio
            </Heading>
          </Fade>
          <Slide right>
            <Box
              style={accent}
              w="35vw"
              // data-aos="slide-left"
              // data-aos-anchor-placement="top-center"
            />
          </Slide>
        </Flex>
        <Fade>
          <Center m="25px 0">
            <Text
              style={txt_body}
              // data-aos="fade-up"
              // data-aos-anchor-placement="top-center"
            >
              Here's a look at what I've built so far!
            </Text>
          </Center>
        </Fade>
        <Center>
          <Box w="35%" m="0 5%">
            <ProjectModule theme={theme} info={projects.proj_1} />
            <ProjectModule theme={theme} info={projects.proj_2} />
          </Box>
          <Box w="35%" m="0 5%">
            <ProjectModule theme={theme} info={projects.proj_3} />
            <ProjectModule theme={theme} info={projects.proj_4} />
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default PortfolioPage;
