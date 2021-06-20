import useVehicles from "../hooks/useVehicles";
import { v4 as uuidv4 } from "uuid";
function ListVehicles({ vehicles }) {
  return (
    <ul>
      {vehicles.map(({ name }) => (
        <li key={uuidv4()}>{name}</li>
      ))}
    </ul>
  );
}
export default function Vehicles({ vehicleLinks }) {
  const vehicles = useVehicles(vehicleLinks);
  return (
    <td>
      {vehicles.length !== 0 ? <ListVehicles vehicles={vehicles} /> : "N/A"}
    </td>
  );
}
