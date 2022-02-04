import { Box, Button, Flex, Text, Heading, Image } from "@chakra-ui/react";

const HomeBar = ({ theme }) => {
  const btn_header = {
    width: "75px",
    borderRadius: "15px",
    color: "white",
  };
  return (
    <>
      <Flex
        justifyContent="flex-end"
        bg={theme[0]}
        h={66}
        w="100vw"
        pr="75px"
        zIndex={2}
        position="fixed"
        top="0"
      >
        <Flex justifyContent="space-between" alignSelf="center" w="400px">
          <Button
            style={btn_header}
            bg={theme[0]}
            boxShadow="base"
            _hover={{ bg: theme[1] }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Button>
          <Button
            style={btn_header}
            bg={theme[0]}
            boxShadow="base"
            _hover={{ bg: theme[1] }}
            onClick={() => {
              window.scrollTo(0, 1080);
            }}
          >
            About
          </Button>
          <Button
            style={btn_header}
            bg={theme[0]}
            boxShadow="base"
            _hover={{ bg: theme[1] }}
          >
            Portfolio
          </Button>
          <Button
            style={btn_header}
            bg={theme[0]}
            boxShadow="base"
            _hover={{ bg: theme[1] }}
          >
            Connect
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeBar;
