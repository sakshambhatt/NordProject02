import useFilms from "../hooks/useFilms";
import { v4 as uuidv4 } from "uuid";
function ListFilms({ films }) {
  return (
    <ul>
      {films.map(({ name }) => (
        <li key={uuidv4()}>{name}</li>
      ))}
    </ul>
  );
}
export default function Films({ filmLinks }) {
  const films = useFilms(filmLinks);
  return <td>{films.length !== 0 ? <ListFilms films={films} /> : "N/A"}</td>;
}
