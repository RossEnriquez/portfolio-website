import { Box, Button, Flex, Text, Heading, Image } from "@chakra-ui/react";

const IndexPage = () => {

  //sage green, tinted sage green, even more tinted sage green, red bean, lighter red
  const theme = ["#667b68", "#87A48A", "#b8c4bb", "#663f46", "#fceee9"];
  const btn_header = {
    width: "75px",
    borderRadius: "15px",
    color: "white",
  }
  const txt_heading = {
    fontWeight: "bold",
    fontSize: 72,
  }
  const txt_body = {
    fontSize: 33,
  }
  const txt_bold = {
    fontWeight: "bold",
    color: theme[3],
  }
  const accent = {
    height: "128px",
    background: theme[2],
  }

  return(<>
    <Flex justifyContent="flex-end" bg={theme[0]} h={66} pr="75px" zIndex={2}>
      <Flex justifyContent="space-between" alignSelf="center" w="400px">
        <Button style={btn_header} bg={theme[0]} boxShadow="base" _hover={{bg: theme[1]}}>Home</Button>
        <Button style={btn_header} bg={theme[0]} boxShadow="base" _hover={{bg: theme[1]}}>About</Button>
        <Button style={btn_header} bg={theme[0]} boxShadow="base" _hover={{bg: theme[1]}}>Portfolio</Button>
        <Button style={btn_header} bg={theme[0]} boxShadow="base" _hover={{bg: theme[1]}}>Connect</Button>
      </Flex>
    </Flex>

    <Flex m="125px">
      <Box w="50%">
        <Heading style={txt_heading}>Hi!</Heading>
        <Heading style={txt_heading}>I'm Ross</Heading>
        <Text style={txt_body} mt="20px">and I like learning anything and everything about software 😁</Text>
      </Box>
      <Image src="imgs\ross.jpg"/>
    </Flex>
    <Box m="125px 0px 0px 125px">
      <Flex justifyContent="space-between">
        <Heading style={txt_heading} alignSelf="center">About me</Heading>
        <Box style={accent} w="76%"/>
      </Flex>
      <Flex>
        <Text style={txt_body} w="880px" mt="20px">
        I’m a third-year <text style={txt_bold}>Computer Engineering (Software option)</text> student
        at <text style={txt_bold}>Ryerson University</text>. I enjoy building cool projects using 
        <text style={txt_bold}>ReactJS</text> and making Discord bots using <text style={txt_bold}>Python</text>. 
        When I’m not coding, you can probably find me playing video games or listening to music!
        </Text>
      </Flex>
    </Box>

  </>);
}

export default IndexPage
