import { Box, Flex, Text, Heading, Image, Center } from "@chakra-ui/react";
import headshot from "/imgs/aboutme.jpg";
import wordle from "/imgs/wordle.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const AboutPage = ({ theme, fontSizes }) => {
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
      <Box overflowX="hidden">
        <Flex ml="6.5vw" justifyContent="space-between">
          <Fade>
            <Heading
              fontWeight="bold"
              fontSize={fontSizes.heading}
              py="5%"
              alignSelf="center"
            >
              About me
            </Heading>
          </Fade>
          <Slide right>
            <Box style={accent} w={["10vw", "10vw", "68vw"]} />
          </Slide>
        </Flex>
        <Flex mt="50px" display={["block", "block", "flex"]}>
          <Box w={["100vw", "100vw", "65vw"]}>
            <Center display={["flex", "flex", "none"]}>
              <Image
                src={headshot.src}
                boxSize={["75%", "75%", "75%"]}
                objectFit="contain"
                borderRadius="10%"
                boxShadow="lg"
              />
            </Center>

            <Fade>
              <Text
                fontSize={fontSizes.body}
                w="100%"
                p="5% 10%"
                textAlign={["center", "center", "left"]}
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
            <Flex mt="50px">
              <Slide left>
                <Box style={accent} w="8vw" mr="2vw" />
              </Slide>
              <Fade>
                <Heading
                  fontSize={fontSizes.subheading}
                  fontWeight="bold"
                  py="3%"
                >
                  What I'm currently up to
                </Heading>
              </Fade>
            </Flex>
            <Fade>
              <Text
                fontSize={fontSizes.body}
                p={["5% 0", "5% 0", "5% 10%"]}
                w="100%"
                textAlign={["center", "center", "left"]}
              >
                <Flex>
                  <Image src={wordle.src} boxSize="40px" />
                  <text style={txt_bold}>Wordle Clone</text>
                </Flex>
                creating a clone of the popular game "Wordle" using NextJS and
                MongoDB
              </Text>
            </Fade>
          </Box>
          <Image
            src={headshot.src}
            display={["none", "none", "flex"]}
            boxSize={["75%", "75%", "25%"]}
            objectFit="contain"
            borderRadius="10%"
            boxShadow="lg"
          />
        </Flex>
      </Box>
    </>
  );
};

export default AboutPage;
