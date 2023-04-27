import onSubmitHandler from "../../onSubmitHandler";
import onChangeHandler from "../../onChangeHandler";
import "./Form.css";

function Form({ fn, ln, phno, table, setTable, setFn, setLn, setPhno }) {
  return (
    <div className="form">
      {" "}
      <form
        onSubmit={(event) =>
          onSubmitHandler(
            event,
            fn,
            ln,
            phno,
            table,
            setTable,
            setFn,
            setLn,
            setPhno
          )
        }
      >
        <label>
          <div>Person's name</div>
        </label>
        <input
          placeholder="First Name"
          value={fn}
          onChange={(event) => onChangeHandler(event, setFn)}
          className="fn"
          required={true}
        ></input>
        <input
          placeholder="Last Name"
          value={ln}
          onChange={(event) => onChangeHandler(event, setLn)}
          required={true}
        ></input>
        <label>
          <div>Contact Number</div>
        </label>
        <input
          type="tel"
          placeholder="Contact Number"
          value={phno}
          onChange={(event) => onChangeHandler(event, setPhno)}
          required={true}
        ></input>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
