export default function search(input, table, setSearchInput) {
  let index = 0;
  if (
    table.some((row) => {
      index++;
      return row.name === input.trim();
    })
  ) {
    alert(input.trim() + " found in row: " + index);
  } else {
    alert(input + " not found");
  }
  setSearchInput("");
}
