import { Box, Flex, Text, Heading, Image, Button } from "@chakra-ui/react";
import headshot from "/imgs/aboutme.jpg";
import { useInViewport } from "react-in-viewport";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutPage = ({ theme }) => {
  //   const myRef = useRef();
  //   const { inViewport } = useInViewport(myRef);
  //   const showComponent = useAnimation();

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

  return (
    <>
      <Box mt="125px" overflowX="hidden" h="101vh">
        <Flex ml="125px" justifyContent="space-between">
          <Heading
            style={txt_heading}
            alignSelf="center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            About me
          </Heading>
          <Box
            style={accent}
            w="78%"
            data-aos="slide-left"
            data-aos-anchor-placement="top-center"
          />
        </Flex>
        <Flex mt="50px">
          <Box w="65vw">
            <Text
              style={txt_body}
              w="880px"
              ml="10%"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              I’m a third-year{" "}
              <text style={txt_bold}>
                Computer Engineering (Software option)
              </text>{" "}
              student at <text style={txt_bold}>Ryerson University</text>. I
              enjoy building cool projects using
              <text style={txt_bold}> ReactJS</text> and making Discord bots
              using <text style={txt_bold}>Python</text>. When I’m not coding,
              you can probably find me playing video games or listening to
              music!
            </Text>
            <Flex
              mt="50px"
              data-aos="slide-right"
              data-aos-anchor-placement="top-center"
            >
              <Box style={accent} w="10%" mr="3%" left="125px" />
              <Heading style={txt_heading} alignSelf="center">
                What I'm currently up to
              </Heading>
            </Flex>
            <Text
              style={txt_body}
              m="50px 250px"
              w="850px"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Box>
                <text style={txt_bold}>Portable Portfolio</text>
              </Box>
              learning full stack web development through project building with
              3 group members
            </Text>
          </Box>
          <Image
            src={headshot.src}
            boxSize="25%"
            objectFit="cover"
            borderRadius="50px"
            boxShadow="lg"
            data-aos="fade-in"
            data-aos-anchor-placement="center-bottom"
          />
        </Flex>
      </Box>
    </>
  );
};

export default AboutPage;
