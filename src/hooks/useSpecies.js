import axios from "axios";
import { useEffect, useState } from "react";

export default function useSpecies(speciesLink) {
  const [species, setSpecies] = useState({});

  useEffect(() => {
    (async function () {
      const response = await axios.get(speciesLink);
      let specie = {};
      specie = { name: response.data.name, URL: speciesLink };
      setSpecies(() => specie);
    })();
  }, []);
  return species;
}
