import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Image,
  Center,
} from "@chakra-ui/react";
import headshot from "/imgs/ross.jpg";

const ConnectPage = ({ theme }) => {
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
      <Flex>
        <Box style={accent} w="65%" mr="3%" />
        <Heading style={txt_heading} alignSelf="center">
          Let's Connect!
        </Heading>
      </Flex>
      <Center></Center>
    </>
  );
};

export default ConnectPage;