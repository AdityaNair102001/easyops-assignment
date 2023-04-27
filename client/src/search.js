export default function search(input, table, setSearchInput) {
  let index = 0;
  if (
    table.some((row) => {
      index++;
      return row.name === input;
    })
  ) {
    alert(input + " found in row: " + index);
  } else {
    alert("Element Not found");
  }
  setSearchInput("");
}
