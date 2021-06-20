import { createContext, useContext, useReducer, useState } from "react";
import pageReducer from "../functions/pageReducer";
import sortReducer from "../functions/sortReducer";
export const PageContext = createContext();

export function usePage() {
  return useContext(PageContext);
}

export function resultsReducer(state, action) {
  const { results, count } = action.payload;
  return { results, count };
}
export default function PageProvider({ children }) {
  const [dropDownValue, setDropDownValue] = useState("NONE");
  const [pageNumber, pageDispatch] = useReducer(pageReducer, 1);
  const [sortBy, sortedPageDispatch] = useReducer(sortReducer, "NONE");
  const [{ results, count }, resultsDispatch] = useReducer(resultsReducer, {
    results: [],
    count: -1
  });
  return (
    <PageContext.Provider
      value={{
        pageNumber,
        pageDispatch,
        results,
        resultsDispatch,
        count,
        sortBy,
        sortedPageDispatch,
        dropDownValue,
        setDropDownValue
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
