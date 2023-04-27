import onChangeHandler from "../../onChangeHandler";
import search from "../../search";
import "./Search.css";

function Search({ table, searchInput, setSearchInput }) {
  return (
    <div className="search">
      {" "}
      <input
        onChange={(event) => onChangeHandler(event, setSearchInput)}
        placeholder="search"
        value={searchInput}
      ></input>
      <button onClick={() => search(searchInput, table, setSearchInput)}>
        Search
      </button>
    </div>
  );
}

export default Search;
