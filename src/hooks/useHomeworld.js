import axios from "axios";
import { useEffect, useState } from "react";

export default function useHomeworld(homeworldLink) {
  const [homeworld, setHomeworld] = useState({});

  useEffect(() => {
    (async function () {
      const response = await axios.get(homeworldLink);
      let hw = {};
      hw = { name: response.data.name, URL: homeworldLink };
      setHomeworld(() => hw);
    })();
  }, []);
  return homeworld;
}
