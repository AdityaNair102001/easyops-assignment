export default function onSubmitHandler(event, fn, ln, phno, table, setTable) {
  event.preventDefault();
  if (table.some((data) => data.name === fn + " " + ln || data.phno === phno)) {
    alert("This data already exists!");
  } else {
    setTable((table) => [...table, { name: fn + " " + ln, phno }]);
  }
}
