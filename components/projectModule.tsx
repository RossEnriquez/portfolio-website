import { Box, Flex, Text, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";
//import img from "/imgs/test-proj.png";

const ProjectModule = ({ theme, info }) => {
  const title = {
    color: theme[3],
    fontWeight: "bold",
    fontSize: 25,
  };
  const body = {
    fontSize: 20,
  };
  const fontSizes = {
    heading: [],
    subheading: [52, 52, 62],
    body: [24, 24, 32],
    description: [16, 16, 20],
  };
  return (
    <>
      <Bounce bottom>
        <motion.div whileHover={{ y: -10, transition: { duration: 0.3 } }}>
          <LinkBox>
            <Box
              w="100%"
              h="40vh"
              p="3%"
              bg="gray.100"
              m="10% 0"
              borderRadius="15px"
              boxShadow="md"
            >
              <LinkOverlay href={info.link}>
                <Text style={title}>
                  {info.name} ({info.tools})
                </Text>
              </LinkOverlay>
              <Flex mt="2%">
                <Image
                  src={info.img}
                  w="50%"
                  h="180px"
                  objectFit="cover"
                  borderRadius="25px"
                />
                <Text
                  fontSize={fontSizes.description}
                  ml="2%"
                  bg="lightblue"
                  maxH="30vh"
                >
                  {info.desc}
                </Text>
              </Flex>
            </Box>
          </LinkBox>
        </motion.div>
      </Bounce>
    </>
  );
};

export default ProjectModule;
