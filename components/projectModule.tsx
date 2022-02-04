import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
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
  return (
    <>
      <LinkBox>
        <Box
          w="100%"
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
            <Text style={body} ml="2%">
              {info.desc}
            </Text>
          </Flex>
        </Box>
      </LinkBox>
    </>
  );
};

export default ProjectModule;
