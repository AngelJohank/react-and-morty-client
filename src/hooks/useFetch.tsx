import { useState, useEffect } from "react";

type status = "loading" | "loaded" | "error";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<status>("loading");

  useEffect(() => {
    setStatus("loading");
    setData(null);

    (async () => {
      try {
        const RESPONSE = await fetch(url);
        const PARSED = await RESPONSE.json();
        setStatus("loaded");
        setData(PARSED);
      } catch {
        setStatus("error");
      }
    })();
  }, [url]);

  return { data, status };
}

export default useFetch;
