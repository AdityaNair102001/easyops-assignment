import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";

function App() {
  const [table, setTable] = useState([]);

  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [phno, setPhno] = useState("");

  const [searchInput, setSearchInput] = useState();

  return (
    <div>
      <Form
        fn={fn}
        ln={ln}
        phno={phno}
        table={table}
        setTable={setTable}
        setFn={setFn}
        setLn={setLn}
        setPhno={setPhno}
      ></Form>
      <Search
        table={table}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      ></Search>
      <Table table={table} setTable={setTable}></Table>
    </div>
  );
}

export default App;
