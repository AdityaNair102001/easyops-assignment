import onChangeHandler from "../../utils/onChangeHandler";
import search from "../../utils/search";
import "./Search.css";

function Search({ table, searchInput, setSearchInput }) {
  return (
    <div className="search">
      {" "}
      <input
        onChange={(event) => onChangeHandler(event, setSearchInput)}
        placeholder="🔎search"
        value={searchInput}
      ></input>
      <button
        onClick={() =>
          searchInput
            ? search(searchInput, table, setSearchInput)
            : alert("Please enter something in search box")
        }
      >
        Search
      </button>
    </div>
  );
}

export default Search;
