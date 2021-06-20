import { usePage } from "../contexts/PageProvider";

export default function Sort() {
  const { sortedPageDispatch, dropDownValue, setDropDownValue } = usePage();

  return (
    <label>
      sort by:{" "}
      <select
        name="sort"
        value={dropDownValue}
        onChange={(e) => {
          sortedPageDispatch({ type: "SORT", payload: e.target.value });
          setDropDownValue(() => e.target.value);
        }}
      >
        <option value="NONE">none</option>
        <option value="HEIGHT_LOW_TO_HIGH">height - low to high</option>
        <option value="HEIGHT_HIGH_TO_LOW">height - high to low</option>
        <option value="MASS_LOW_TO_HIGH">mass - low to high</option>
        <option value="MASS_HIGH_TO_LOW">mass - high to low</option>
      </select>
    </label>
  );
}
