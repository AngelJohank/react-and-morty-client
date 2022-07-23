import { Character, CharacterResponse } from "../types/character";
import { status } from "../types/status";

import { useState, useEffect } from "react";
import axios from "axios";

function useCharacter(pageNumber: number) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [status, setStatus] = useState<status>("loading");
  const [hasMore, setHasMore] = useState(true); // True to show a loader  at the beginning

  const API = "https://rickandmortyapi.com/api/character";

  // Fetch Pages
  useEffect(() => {
    // axios abort controller
    const controller = new AbortController();

    // Set new status every request
    setStatus("loading");

    (async () => {
      try {
        // Get data
        const response = await axios.get(API, {
          params: { page: pageNumber },
          signal: controller.signal,
        });

        // Unwrap Data
        const responseData: CharacterResponse = response.data;

        // Handle Page Limit
        if (pageNumber === responseData.info.pages) setHasMore(false);
        else setHasMore(true);

        // Handle Characters
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...responseData.results,
        ]);

        // Finalize Status
        setStatus("success");
      } catch (e) {
        // Ignore axios cancelation
        if (axios.isCancel(e)) return;

        // Set Error Status
        setStatus("error");
      }
    })();

    return () => {
      // Abort request if theres a new one coming
      controller.abort();
    };
  }, [pageNumber]);

  return { characters, status, hasMore };
}

export default useCharacter;
