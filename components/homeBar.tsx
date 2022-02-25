import { Button, Flex, Switch, useColorMode } from "@chakra-ui/react";
import { scroller } from "react-scroll";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ImContrast } from "react-icons/im";

const HomeBar = ({ theme }) => {
  const btn_header = {
    width: "75px",
    borderRadius: "15px",
    color: "white",
  };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        justifyContent={{ sm: "center", md: "flex-end" }}
        bg={theme[0]}
        h="70px"
        w="100vw"
        px={{ sm: "10px", md: "75px" }}
        zIndex={2}
        position="fixed"
        top="0"
      >
        <Flex
          justifyContent="space-between"
          alignSelf="center"
          w="425px"
          px={"10px"}
        >
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
            }}
          >
            Connect
          </Button>
          <Button
            borderRadius="full"
            _focus={{ borderColor: "none" }}
            onClick={toggleColorMode}
          >
            {/* {colorMode == "light" ? <BsFillSunFill /> : <BsFillMoonFill />} */}
            <ImContrast />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeBar;
