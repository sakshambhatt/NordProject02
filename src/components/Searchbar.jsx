import { usePage } from "../contexts/PageProvider";
import { useState } from "react";
export default function Searchbar({
  value: { setStringToSearch, setToSearch }
}) {
  const { sortedPageDispatch, setDropDownValue, resultsDispatch } = usePage();
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="search-bar">
      <button
        className="button button-primary"
        onClick={() => {
          resultsDispatch({
            type: "SEARCH_RESULT",
            payload: { results: [], count: -1 }
          });
          setInputValue("");
        }}
      >
        clear
      </button>
      <input
        type="text"
        placeholder="search names"
        onChange={(e) => {
          setInputValue(() => e.target.value);
          setStringToSearch(() => inputValue);
        }}
        value={inputValue}
      />
      <button
        className="button button-icon"
        onClick={() => {
          setToSearch(() => true);
          sortedPageDispatch({ type: "SORT", payload: "NONE" });
          setDropDownValue(() => "NONE");
        }}
      >
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
      </button>
    </div>
  );
}
