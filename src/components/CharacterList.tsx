import { Box, Center, Flex, Spinner } from "@chakra-ui/react";

import useCharacter from "../hooks/useCharacter";

import InfiniteScroll from "./InfiniteScroll";
import CharacterItem from "./CharacterItem";

function CharacterList() {
  const { characters, status, hasMore, goNext } = useCharacter();

  return (
    <div>
      <InfiniteScroll
        status={status}
        hasMore={hasMore}
        goNext={goNext}
        loader={
          <Center my="4">
            <Spinner />
          </Center>
        }
        errorMessage={
          <Box>
            <Center>There was an error</Center>
          </Box>
        }
        endMessage={
          <Box>
            <Center>You have reached the end!</Center>
          </Box>
        }
      >
        <Flex wrap="wrap" justify="space-evenly">
          {characters.map((character) => (
            <CharacterItem key={character.id} {...character} />
          ))}
        </Flex>
      </InfiniteScroll>
    </div>
  );
}

export default CharacterList;
