import { Character } from "../types/character";
import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function CharacterItem({
  name,
  status,
  gender,
  location,
  origin,
  image,
}: Character) {
  return (
    <Flex
      bg="#3e3e3e"
      w="lg"
      h="48"
      m="4"
      borderRadius="3xl"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={image} loading="lazy" h="100%" w={1 / 3} objectFit="cover" />
      <Box p="4" w="100%" h="100%">
        <div>
          <Heading color="white" fontSize="2xl">
            {name}
          </Heading>
        </div>

        <div>
          <Badge
            rounded="full"
            px="2"
            mr="2"
            colorScheme={status === "Alive" ? "teal" : "red"}
          >
            {status}
          </Badge>
          <Badge rounded="full" px="2" mr="2" colorScheme="orange">
            {gender}
          </Badge>
          <Badge rounded="full" px="2" colorScheme="green">
            {location.name}
          </Badge>
        </div>

        <Flex h="55%" align="center">
          <Text
            fontSize="md"
            fontWeight="bold"
            letterSpacing="wide"
            color="gray.400"
          >
            First seen in: {origin.name}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default CharacterItem;
