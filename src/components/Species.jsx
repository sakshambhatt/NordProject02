import useSpecies from "../hooks/useSpecies.js";
export default function Species({ speciesLink }) {
  const { name } = useSpecies(speciesLink);
  const question = "fa fa-question fa-lg";
  const droid = "fa fa-android fa-lg";
  return (
    <td>
      <span>{name ? name : "N/A"}</span>
      <i className={name === "Droid" ? droid : question}></i>
    </td>
  );
}
