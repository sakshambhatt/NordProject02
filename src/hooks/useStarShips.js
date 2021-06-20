import axios from "axios";
import { useEffect, useState } from "react";

export default function useStarShips(shipLinks) {
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    (async function () {
      let starShips = [];
      for (let i = 0; i < shipLinks.length; i++) {
        const response = await axios.get(shipLinks[i]);
        starShips.push({ name: response.data.name, URL: shipLinks[i] });
      }
      setStarShips(() => starShips);
    })();
  }, []);
  return starShips;
}
