import axios from "axios";
import { useEffect, useState } from "react";

export default function useVehicles(vehicleLinks) {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    (async function () {
      let vehicles = [];
      for (let i = 0; i < vehicleLinks.length; i++) {
        const response = await axios.get(vehicleLinks[i]);
        vehicles.push({ name: response.data.name, URL: vehicleLinks[i] });
      }
      setVehicles(() => vehicles);
    })();
  }, []);
  return vehicles;
}
