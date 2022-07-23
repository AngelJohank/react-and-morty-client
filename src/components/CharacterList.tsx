import { useState, useRef, useCallback } from "react";
import { Center, Flex, Spinner } from "@chakra-ui/react";
import CharacterItem from "./CharacterItem";

import useCharacter from "../hooks/useCharacter";

function CharacterList() {
  const [pageNumber, setPageNumber] = useState(1);
  const { characters, status, hasMore } = useCharacter(pageNumber);

  const observer = useRef<IntersectionObserver>();
  const loaderItem = useCallback(
    (node: HTMLDivElement) => {
      if (status === "loading") return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore)
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
      });

      if (node) observer.current.observe(node);
    },
    [status, hasMore]
  );

  return (
    <div>
      <Flex wrap="wrap" justify="space-evenly">
        {characters.map((character) => (
          <CharacterItem key={character.id} {...character} />
        ))}
      </Flex>

      <div ref={loaderItem}>
        <Center my="4">
          <Spinner />
        </Center>
      </div>
    </div>
  );
}

export default CharacterList;
