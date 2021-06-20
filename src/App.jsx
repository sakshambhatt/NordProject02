import "./css/styles.css";
import Table from "./components/Table";
import usePeople from "./hooks/usePeople";
import { usePage } from "./contexts/PageProvider";
import NavBar from "./components/NavBar";
export default function App() {
  const { pageNumber, pageDispatch } = usePage();
  const { people, status } = usePeople({ pageNumber });
  // console.log("pageNumber", pageNumber);
  return (
    <div className="app">
      <NavBar pageDispatch={pageDispatch} />
      <div hidden={status === "loading" ? false : true} className="spinner">
        <i className="fa fa-spinner fa-2x" aria-hidden="true"></i>
        {status}
      </div>
      <Table people={people} />
    </div>
  );
}
