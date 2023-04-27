export default function del(setTable, index) {
  setTable((table) => table.filter((row, i) => i !== index));
}
