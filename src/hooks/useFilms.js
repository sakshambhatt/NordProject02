import axios from "axios";
import { useEffect, useState } from "react";

export default function useFilms(filmLinks) {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    (async function () {
      let films = [];
      for (let i = 0; i < filmLinks.length; i++) {
        const response = await axios.get(filmLinks[i]);
        films.push({ name: response.data.title, URL: filmLinks[i] });
      }
      setFilms(() => films);
    })();
  }, []);
  return films;
}
