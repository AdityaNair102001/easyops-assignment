import "./App.css";
import { useState } from "react";
import onSubmitHandler from "./onSubmitHandler";
import onChangeHandler from "./onChangeHandler";

function del(setTable, index) {
  setTable((table) => table.filter((row, i) => i !== index));
}

function sort(table, setTable) {
  const newTable = [...table].sort(function (row1, row2) {
    if (row1.name > row2.name) {
      return 1;
    } else if (row1.name < row2.name) {
      return -1;
    }
    return 0;
  });
  console.log(newTable);
  setTable(newTable);
}

function search(input, table) {
  if (table.some((row) => row.name === input)) {
    alert("Element found!");
  } else {
    alert("Element Not found");
  }
}

function App() {
  const [table, setTable] = useState([]);
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [phno, setPhno] = useState("");

  const [searchInput, setSearchInput] = useState();

  return (
    <div>
      <form
        onSubmit={(event) =>
          onSubmitHandler(event, fn, ln, phno, table, setTable)
        }
      >
        <label>
          <h2>Person's name</h2>
        </label>
        <input
          placeholder="First Name"
          onChange={(event) => onChangeHandler(event, setFn)}
        ></input>
        <input
          placeholder="Last Name"
          onChange={(event) => onChangeHandler(event, setLn)}
        ></input>
        <label>
          <h2>Contact Number</h2>
        </label>
        <input
          type="tel"
          placeholder="Contact Number"
          onChange={(event) => onChangeHandler(event, setPhno)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <input
        onChange={(event) => onChangeHandler(event, setSearchInput)}
        placeholder="search"
      ></input>
      <button onClick={() => search(searchInput, table)}>Search</button>

      <table border={"black"}>
        <tr>
          <th>Sno</th>
          <th onClick={() => sort(table, setTable)}>Name</th>
          <th>Contact Number</th>
          <th>Delete</th>
        </tr>
        {table.length > 0
          ? table.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.phno}</td>
                <td
                  onClick={() => del(setTable, index)}
                  style={{ cursor: "pointer" }}
                >
                  x
                </td>
              </tr>
            ))
          : null}
      </table>
    </div>
  );
}

export default App;
