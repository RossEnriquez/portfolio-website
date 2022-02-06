import {
  Box,
  Text,
  Heading,
  Image,
  Center,
  IconButton,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { MdOutlineContentCopy } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import dp from "/imgs/linkedin.jpg";
import img from "/imgs/test-proj.png";
import { useState } from "react";

const SocialsCard = ({ theme }) => {
  const email = "ross.enriquez@ryerson.ca";
  const [clipboard, setClipboard] = useState(email);
  const { hasCopied, onCopy } = useClipboard(clipboard);
  const toast = useToast();

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
      <Box
        w="30%"
        borderRadius="15px"
        boxShadow="base"
        overflow="hidden"
        data-aos="flip-left"
        data-aos-anchor-placement="top-center"
      >
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
          <Center mt="1%">
            <AiOutlineMail />
          </Center>
          <Text ml="1%">{email}</Text>
          <IconButton
            aria-label="Copy Email"
            icon={<MdOutlineContentCopy />}
            bg="none"
            borderRadius="full"
            _hover={{ bg: "none" }}
            _active={{ bg: "gray.100" }}
            _focus={{ outline: "none" }}
            onClick={() => {
              setClipboard(email);
              onCopy();
              toast({
                title: "Copied!",
                status: "success",
                duration: 1000,
              });
            }}
          />
        </Center>
        <Center mb="10%" justifyContent="space-evenly">
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          >
            <SocialIcon url="https://github.com/RossEnriquez" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          >
            <SocialIcon url="https://www.linkedin.com/in/ross-enriquez/" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          >
            <SocialIcon url="https://www.instagram.com/en.riquez/?hl=en" />
          </motion.div>
        </Center>
      </Box>
    </>
  );
};

export default SocialsCard;
