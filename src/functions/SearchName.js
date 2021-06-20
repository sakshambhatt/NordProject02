import axios from "axios";
export default async function searchName(
  resultsDispatch,
  setStringToSearch,
  setToSearch,
  stringToSearch
) {
  let response;
  let results = [];
  let count = -1;
  try {
    response = await axios.get(
      `https://swapi.dev/api/people/?search=${stringToSearch}`
    );
    results = response.data.results;
    count = response.data.count;
  } catch (error) {
    console.error(error);
  } finally {
    setToSearch(() => false);
    setStringToSearch(() => "");
  }
  resultsDispatch({ type: "SEARCH_RESULT", payload: { results, count } });
}
