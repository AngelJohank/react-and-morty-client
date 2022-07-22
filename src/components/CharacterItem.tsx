import { Character } from "../types/character";
import { Badge, Box, Text, Image } from "@chakra-ui/react";

function CharacterItem({ name, status, gender, origin, image }: Character) {
  return (
    <Box
      w="sm"
      m="2"
      maxW="sm"
      borderWidth="5px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src={image}
        title={name}
        w="100%"
        h="300px"
        objectFit="cover"
        loading="lazy"
      />

      {/* Badges */}
      <Box m="2">
        <Badge mr="2">{gender}</Badge>
        <Badge mr="2" colorScheme={status === "Alive" ? "green" : "red"}>
          {status}
        </Badge>
        <Badge mr="2" colorScheme="purple">
          {origin.name}
        </Badge>
      </Box>

      {/* Name */}
      <Box m="2">
        <Text fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
      </Box>
    </Box>
  );
}

export default CharacterItem;
