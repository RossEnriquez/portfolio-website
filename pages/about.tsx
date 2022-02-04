import { Box, Button, Flex, Text, Heading, Image } from "@chakra-ui/react";
import headshot from "/imgs/aboutme.jpg";

const AboutPage = ({ theme }) => {
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
      <Box mt="125px">
        <Flex justifyContent="space-between" ml="125px">
          <Heading style={txt_heading} alignSelf="center">
            About me
          </Heading>
          <Box style={accent} w="78%" />
        </Flex>
        <Flex mt="50px">
          <Box w="65vw">
            <Text style={txt_body} w="880px" ml="10%">
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
            <Flex mt="50px">
              <Box style={accent} w="10%" mr="3%" left="125px" />
              <Heading style={txt_heading} alignSelf="center">
                What I'm currently up to
              </Heading>
            </Flex>
            <Text style={txt_body} m="50px 250px" w="850px">
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
          />
        </Flex>
      </Box>
    </>
  );
};

export default AboutPage;
