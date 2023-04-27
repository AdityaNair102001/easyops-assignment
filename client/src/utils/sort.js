export default function sort(table, setTable) {
  const sortedTable = [...table].sort(function (row1, row2) {
    if (row1.name > row2.name) {
      return 1;
    } else if (row1.name < row2.name) {
      return -1;
    }
    return 0;
  });
  setTable(sortedTable);
}
