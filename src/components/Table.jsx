import StarShips from "./StarShips";
import Films from "./Films";
import Vehicles from "./Vehicles";
import Homeworld from "./Homeworld";
import Species from "./Species";
import Biodata from "./Biodata";
import { getSortedData } from "../functions/getSortedData";
import { usePage } from "../contexts/PageProvider";
export default function Table({ people }) {
  const { sortBy, results, count } = usePage();
  //console.log("results", results);
  let sortedData;
  if (count > 0) {
    sortedData = getSortedData([...results], sortBy);
  } else {
    sortedData = getSortedData([...people], sortBy);
  }

  return (
    <div>
      <table hidden={count === 0 ? true : false}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bio-data</th>
            <th>Homeworld</th>
            <th>Films</th>
            <th>Species</th>
            <th>Vehicles</th>
            <th>Starships</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(
            ({
              name,
              height,
              mass,
              hair_color,
              skin_color,
              eye_color,
              birth_year,
              gender,
              homeworld,
              films,
              species,
              vehicles,
              starships
            }) => {
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>
                    <Biodata
                      props={{
                        height,
                        mass,
                        hair_color,
                        skin_color,
                        eye_color,
                        birth_year,
                        gender
                      }}
                    />
                  </td>
                  <Homeworld homeworldLink={homeworld} />
                  <Films filmLinks={films} />
                  <Species speciesLink={species} />
                  <Vehicles vehicleLinks={vehicles} />
                  <StarShips shipLinks={starships} />
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <div hidden={count === 0 ? false : true} className="no-results">
        <i className="fa fa-exclamation-triangle fa-2x" aria-hidden="true"></i>
        <p>No results found...</p>
      </div>
    </div>
  );
}
