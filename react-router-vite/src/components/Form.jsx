import { useContext } from "react";
import { GeneralContext } from "../App";
import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(GeneralContext);

  const onHandleInput = (e) => setInput(e.target.value);

  const onHandleClick = () =>
    dispatch({ type: "CHANGE_USERNAME", payload: input });

  return (
    <div className="Form">
      <input type="text" value={input} onChange={onHandleInput} />
      <button onClick={onHandleClick}>Change username</button>
    </div>
  );
};

export default Form;
