import { useState } from "react";
export default function Biodata({
  props: { height, mass, hair_color, skin_color, eye_color, birth_year, gender }
}) {
  const [hideData, setHideData] = useState(true);
  return (
    <div>
      <ul hidden={hideData}>
        <li>height: {height}</li>
        <li>mass: {mass}</li>
        <li>hair-color: {hair_color}</li>
        <li>skin-color: {skin_color}</li>
        <li>eye-color: {eye_color}</li>
        <li>birth-year: {birth_year}</li>
        <li>gender: {gender}</li>
      </ul>
      <button
        className="button button-primary"
        onClick={() => {
          setHideData(() => !hideData);
        }}
      >
        {hideData === true ? "show" : "hide"}
      </button>
    </div>
  );
}
