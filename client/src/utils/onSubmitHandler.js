export default function onSubmitHandler(
  event,
  fn,
  ln,
  phno,
  table,
  setTable,
  setFn,
  setLn,
  setPhno
) {
  event.preventDefault();
  if (table.some((data) => data.name === fn + " " + ln || data.phno === phno)) {
    alert("This data already exists!");
  } else {
    setTable((table) => [...table, { name: fn + " " + ln, phno }]);
    setFn("");
    setLn("");
    setPhno("");
    if (localStorage.getItem("easyops")) {
      const oldData = JSON.parse(localStorage.getItem("easyops"));
      console.log(oldData);
      localStorage.setItem(
        "easyops",
        JSON.stringify([...oldData, { name: fn + " " + ln, phno }])
      );
    } else {
      localStorage.setItem(
        "easyops",
        JSON.stringify([{ name: fn + " " + ln, phno }])
      );
    }
  }
}
