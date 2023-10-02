import { FormEvent, useState } from "react";
import styles from "../styles/Pippo.module.scss";

export default function Pippo() {
  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputSurnameValue, setInputSurnameValue] = useState<string>("");
  const [inputAgeValue, setInputAgeValue] = useState<string>("");
  const [dropdownActiveStatus, setDropdownActiveStatus] =
    useState<string>("name");

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onRenderDropdownStatus = () => {
    switch (dropdownActiveStatus) {
      case "name":
        return (
          <input
            type="text"
            value={inputNameValue}
            onChange={(e) => setInputNameValue(e.target.value)}
            placeholder="Insert a name"
          />
        );
      case "surname":
        return (
          <input
            type="text"
            value={inputSurnameValue}
            onChange={(e) => setInputSurnameValue(e.target.value)}
            placeholder="Insert a surname"
          />
        );
      case "age":
        return (
          <input
            type="date"
            value={inputAgeValue}
            onChange={(e) => setInputAgeValue(e.target.value)}
          />
        );
    }
  };

  return (
    <div className={styles.Pippo}>
      <form onSubmit={onHandleSubmit}>
        <select
          name="person"
          id="person"
          onChange={(e) => setDropdownActiveStatus(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="surname">Surname</option>
          <option value="age">Age</option>
        </select>
        {onRenderDropdownStatus()}
      </form>
    </div>
  );
}
