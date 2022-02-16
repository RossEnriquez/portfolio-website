import { Box, Flex, Text, Heading, Image, Button } from "@chakra-ui/react";
import headshot from "/imgs/aboutme.jpg";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const AboutPage = ({ theme }) => {
  //   const myRef = useRef();
  //   const { inViewport } = useInViewport(myRef);
  //   const showComponent = useAnimation();

  const txt_heading = {
    fontWeight: "bold",
    fontSize: 72,
  };
  const txt_subheading = {
    fontWeight: "bold",
    fontSize: 62,
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
      <Box mt="125px" overflowX="hidden">
        <Flex ml="6.5vw" justifyContent="space-between">
          <Fade>
            <Heading
              style={txt_heading}
              alignSelf="center"
              // data-aos="fade-up"
              // data-aos-anchor-placement="top-center"
            >
              About me
            </Heading>
          </Fade>
          <Slide right>
            <Box
              style={accent}
              w="68vw"
              // data-aos="slide-left"
              // data-aos-anchor-placement="top-center"
            />
          </Slide>
        </Flex>
        <Flex mt="50px">
          <Box w="65vw">
            <Fade>
              <Text
                style={txt_body}
                w="75%"
                ml="10%"
                // data-aos="fade-up"
                // data-aos-anchor-placement="top-center"
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
            </Fade>
            <Flex
              mt="50px"
              // data-aos="slide-right"
              // data-aos-anchor-placement="top-center"
            >
              <Slide left>
                <Box style={accent} w="8vw" mr="2vw" />
              </Slide>
              <Fade>
                <Heading style={txt_subheading} alignSelf="center">
                  What I'm currently up to
                </Heading>
              </Fade>
            </Flex>
            <Fade>
              <Text
                style={txt_body}
                m="5% 10%"
                w="850px"
                // data-aos="fade-up"
                // data-aos-anchor-placement="bottom-bottom"
              >
                <Box>
                  <text style={txt_bold}>Portable Portfolio</text>
                </Box>
                learning full stack web development through project building
                with 3 group members
              </Text>
            </Fade>
          </Box>
          <Image
            src={headshot.src}
            boxSize="25%"
            objectFit="cover"
            borderRadius="50px"
            boxShadow="lg"
            // data-aos="fade-in"
            // data-aos-anchor-placement="center-bottom"
          />
        </Flex>
      </Box>
    </>
  );
};

export default AboutPage;
