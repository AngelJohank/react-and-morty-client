import { useState } from "react";
import { Response } from "../types/character";
import { Button, Flex } from "@chakra-ui/react";

import useFetch from "../hooks/useFetch";
import CharacterItem from "./CharacterItem";

function CharacterList() {
  const [api, setApi] = useState("https://rickandmortyapi.com/api/character");
  const { data, status } = useFetch<Response>(api);

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
      <div>
        <Button
          colorScheme="purple"
          variant="outline"
          onClick={nextPage}
          disabled={data?.info.next === null || !data}
        >
          Next Page
        </Button>
        <Button
          colorScheme="whatsapp"
          variant="outline"
          onClick={prevPage}
          disabled={data?.info.prev === null || !data}
        >
          Prev Page
        </Button>
      </div>

      <Flex wrap="wrap" justify="space-evenly">
        {status === "loading" && "Loading characters"}
        {status === "error" && "There was an error loading the characters"}
        {status === "loaded" &&
          data?.results.map((character) => (
            <CharacterItem key={character.id} {...character} />
          ))}
      </Flex>
    </div>
  );
}

export default CharacterList;
