import useStarShips from "../hooks/useStarShips";
import { v4 as uuidv4 } from "uuid";
function ListStarShips({ ships }) {
  return (
    <ul>
      {ships.map(({ name }) => (
        <li key={uuidv4()}>{name}</li>
      ))}
    </ul>
  );
}
export default function StarShips({ shipLinks }) {
  const ships = useStarShips(shipLinks);
  return (
    <td>{ships.length !== 0 ? <ListStarShips ships={ships} /> : "N/A"}</td>
  );
}
