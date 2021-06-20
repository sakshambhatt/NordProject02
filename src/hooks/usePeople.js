import axios from "axios";
import { useState, useEffect } from "react";
export default function usePeople({ pageNumber }) {
  const [people, setPeople] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => {
    (async function () {
      setStatus("loading");

      let response;
      try {
        response = await axios.get(
          `https://swapi.dev/api/people/?page=${pageNumber}`
        );
        if (response.status === 200) {
          setStatus("");
          setPeople(() => response.data.results);
        }
      } catch (error) {
        setStatus("" + error);
      }
    })();
  }, [pageNumber]);
  return { people, status };
}
