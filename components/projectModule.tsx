import {
  Box,
  Flex,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";

const ProjectModule = ({ theme, info, fontSizes }) => {
  const bgColor = useColorModeValue(
    "rgba(0, 0, 0, 0.05)",
    "rgba(255, 255, 255, 0.05)"
  );
  return (
    <>
      <Bounce bottom>
        <motion.div whileHover={{ y: -10, transition: { duration: 0.3 } }}>
          <LinkBox>
            <Box
              w="100%"
              h={["275px", "275px", "250px"]}
              p="3%"
              bg={bgColor}
              m="10% 0"
              borderRadius="15px"
              boxShadow="md"
              overflow="hidden"
            >
              <LinkOverlay href={info.link}>
                <Text
                  color={theme[3]}
                  fontWeight="bold"
                  fontSize={fontSizes.title}
                >
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
                <Text fontSize={fontSizes.description} ml="2%" maxH="30vh">
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
