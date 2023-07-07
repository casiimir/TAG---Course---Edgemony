import { useContext } from "react";
import { GeneralContext } from "../App";

const Navbar = () => {
  const { state } = useContext(GeneralContext);

  return (
    <div className="Navbar">
      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <li>Home</li>
        <li>Contacts</li>
        <li>Todo</li>
        <li>Sei loggato come {state.username}</li>
      </ul>
    </div>
  );
};

export default Navbar;
