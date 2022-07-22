import { useState } from "react";

import CharacterItem from "./CharacterItem";
import { Alert, Box, Button, Divider, Flex } from "@chakra-ui/react";

import useFetch from "../hooks/useFetch";
import { CharacterResponse } from "../types/character";

function CharacterList() {
  const [api, setApi] = useState("https://rickandmortyapi.com/api/character");
  const { data, status } = useFetch<CharacterResponse>(api);

  const nextPage = () => {
    if (data?.info.next) {
      setApi(data.info.next);
    }
  };

  const prevPage = () => {
    if (data?.info.prev) {
      setApi(data.info.prev);
    }
  };

  return (
    <div>
      <Flex wrap="wrap" justify="space-evenly">
        {status === "loading" && (
          <Alert colorScheme="green">Loading the characters</Alert>
        )}
        {status === "error" && (
          <Alert colorScheme="red">
            There was an error loading the characters :(
          </Alert>
        )}
        {status === "loaded" &&
          data?.results.map((character) => (
            <CharacterItem key={character.id} {...character} />
          ))}
      </Flex>

      <Divider />

      <Box maxW="300px" mx="auto" my="4">
        <Flex justify="space-between">
          <Button
            onClick={nextPage}
            disabled={data?.info.next === null || !data}
            borderRadius='3xl'
            colorScheme="purple"
          >
            Next Page
          </Button>
          <Button
            onClick={prevPage}
            disabled={data?.info.prev === null || !data}
            borderRadius='3xl'
            colorScheme="whatsapp"
          >
            Prev Page
          </Button>
        </Flex>
      </Box>
    </div>
  );
}

export default CharacterList;
