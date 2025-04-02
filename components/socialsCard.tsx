import {
  Box,
  Text,
  Heading,
  Image,
  Center,
  IconButton,
  useClipboard,
  useToast,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { MdOutlineContentCopy } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import dp from "/imgs/linkedin2.jpeg";
import img from "/imgs/test-proj.png";
import { useState } from "react";
import ResumeModal from "./resumeModal";

const SocialsCard = ({ theme }) => {
  const email = "ross.enriquez@torontomu.ca";
  const [clipboard, setClipboard] = useState(email);
  const { hasCopied, onCopy } = useClipboard(clipboard);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  return (
    <>
      <Box
        w={["300px", "300px", "500px"]}
        borderRadius="15px"
        boxShadow="base"
        overflow="hidden"
      >
        <Fade>
          <Box>
            <Image src={img.src} w="100%" />
            <Center w="100%" mt="-75px">
              <Image
                src={dp.src}
                w="200px"
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
            <Center p="2%">
              <Text textAlign="center">
                Software Developer @ ECCC | Software Engineering Student @ TMU
              </Text>
            </Center>
            <Center mb="5%">
              <Text color="gray.500">Toronto, Ontario, Canada</Text>
            </Center>
            <Center>
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
            <Center m="7% 0">
              <Button onClick={onOpen}>View my Resume</Button>
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
            <ResumeModal isOpen={isOpen} onClose={onClose} theme={theme} />
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default SocialsCard;
