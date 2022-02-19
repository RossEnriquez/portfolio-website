import { Button, Flex } from "@chakra-ui/react";
import { scroller } from "react-scroll";

const HomeBar = ({ theme }) => {
  const btn_header = {
    width: "75px",
    borderRadius: "15px",
    color: "white",
  };
  return (
    <>
      <Flex
        justifyContent={{ sm: "center", md: "flex-end" }}
        bg={theme[0]}
        h="70px"
        w="100vw"
        pr={{ sm: "0px", md: "75px" }}
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
            _focus={{ borderColor: "none" }}
            onClick={() => {
              scroller.scrollTo("home", {
                smooth: true,
                duration: 1500,
                offset: -50,
              });
              // window.scrollTo(0, 0);
            }}
          >
            Home
          </Button>

          <Button
            style={btn_header}
            bg={theme[0]}
            boxShadow="base"
            _hover={{ bg: theme[1] }}
            _focus={{ borderColor: "none" }}
            onClick={() => {
              scroller.scrollTo("about", {
                smooth: true,
                duration: 1500,
                offset: -100,
              });
              // window.scrollTo(0, 1080);
            }}
          >
            About
          </Button>
          <Button
            style={btn_header}
            bg={theme[0]}
            boxShadow="base"
            _hover={{ bg: theme[1] }}
            _focus={{ borderColor: "none" }}
            onClick={() => {
              scroller.scrollTo("portfolio", {
                smooth: true,
                duration: 1000,
                offset: 30,
              });
              // window.scrollTo(0, 1080);
            }}
          >
            Portfolio
          </Button>
          <Button
            style={btn_header}
            bg={theme[0]}
            boxShadow="base"
            _hover={{ bg: theme[1] }}
            _focus={{ borderColor: "none" }}
            onClick={() => {
              scroller.scrollTo("connect", {
                smooth: true,
                duration: 1500,
                offset: -100,
              });
              // window.scrollTo(0, 1080);
            }}
          >
            Connect
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeBar;
