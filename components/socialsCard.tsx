import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Center,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { MdOutlineContentCopy } from "react-icons/md";
import dp from "/imgs/linkedin.jpg";
import img from "/imgs/test-proj.png";

const SocialsCard = ({ theme }) => {
  const title = {
    color: theme[3],
    fontWeight: "bold",
    fontSize: 25,
  };
  const body = {
    fontSize: 20,
  };
  return (
    <>
      <Box w="30%" borderRadius="15px" boxShadow="base" overflow="hidden">
        <Image src={img.src} w="100%" />
        <Center w="100%" mt="-75px" overflowWrap="normal">
          <Image
            src={dp.src}
            borderRadius="full"
            border="4px"
            borderColor="white"
          />
        </Center>
        <Center>
          <Heading alignSelf="center" mr="1%">
            Ross Enriquez
          </Heading>
        </Center>
        <Center>
          <Text>Computer Engineering Student at Ryerson University</Text>
        </Center>
        <Center mb="5%">
          <Text color="gray.500">Brampton, Ontario, Canada</Text>
        </Center>
        <Center mb="5%">
          <Text>ross.enriquez@ryerson.ca</Text>
          <IconButton
            aria-label="Copy Email"
            icon={<MdOutlineContentCopy />}
            bg="none"
            borderRadius="full"
            _hover={{ bg: "none" }}
            _active={{ bg: "gray.100" }}
            _focus={{ outline: "none" }}
            onClick={() => {}}
          />
        </Center>
        <Center mb="10%" justifyContent="space-evenly">
          <SocialIcon url="https://github.com/RossEnriquez" />
          <SocialIcon url="https://www.linkedin.com/in/ross-enriquez/" />
          <SocialIcon url="https://www.instagram.com/en.riquez/?hl=en" />
        </Center>
      </Box>
    </>
  );
};

export default SocialsCard;
