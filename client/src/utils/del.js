export default function del(setTable, index) {
  setTable((table) => table.filter((row, i) => i !== index));
  const oldData = JSON.parse(localStorage.getItem("easyops"));
  const newData = oldData.filter((row, i) => i !== index);
  localStorage.setItem("easyops", JSON.stringify(newData));
}
