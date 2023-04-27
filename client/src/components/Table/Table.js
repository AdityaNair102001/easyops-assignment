import sort from "../../utils/sort";
import del from "../../utils/del";
import "./Table.css";
import { useEffect } from "react";

function Table({ table, setTable }) {
  useEffect(() => {
    if (localStorage.getItem("easyops")) {
      setTable(JSON.parse(localStorage.getItem("easyops")));
    }
  }, []);
  return (
    <div className="table">
      {" "}
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

export default Table;
