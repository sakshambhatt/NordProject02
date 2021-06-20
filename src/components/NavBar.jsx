import Sort from "../components/Sort";
import { useEffect, useState } from "react";
import { usePage } from "../contexts/PageProvider";
import searchName from "../functions/SearchName";
import Searchbar from "../components/Searchbar";
export default function NavBar({ pageDispatch }) {
  const [stringToSearch, setStringToSearch] = useState("");
  const [toSearch, setToSearch] = useState(false);
  const { resultsDispatch } = usePage();
  useEffect(() => {
    let result;
    if (toSearch) {
      searchName(
        resultsDispatch,
        setStringToSearch,
        setToSearch,
        stringToSearch
      );
    }
    return result;
  }, [toSearch]);

  return (
    <nav>
      <div className="nav-button-container">
        <button
          className="button button-icon button-turn-page"
          onClick={() => {
            pageDispatch({ type: "CHANGE_PAGE", payload: "PREVIOUS" });
          }}
        >
          <i className="fa fa-long-arrow-left fa-lg" aria-hidden="true"></i>
        </button>
        <Sort />

        <Searchbar value={{ setStringToSearch, setToSearch }} />
        <button
          className="button button-icon button-turn-page"
          onClick={() => {
            pageDispatch({ type: "CHANGE_PAGE", payload: "NEXT" });
          }}
        >
          <i className="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
}
