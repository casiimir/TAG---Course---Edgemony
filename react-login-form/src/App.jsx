import { useState } from "react";
import LoginFullModal from "./components/loginFullModal/LoginFullModal";
import "./App.css";
// import Card from "./components/card/Card";

function App() {
  // Codice Commentato: conditional rendering in base Select Element
  // const cars = ["volvo", "saab", "mercedes", "audi"];

  // const [carSelection, setCarSelection] = useState(cars[0]);
  // const onHandleChange = (event) => setCarSelection(event.target.value);
  // const onSelectRender = () => {
  //   switch (carSelection) {
  //     case "volvo":
  //       return <Card data={{ content: "volvo" }} />;
  //     case "saab":
  //       return <Card data={{ content: "saab" }} />;
  //     case "mercedes":
  //       return <Card data={{ content: "mercedes" }} />;
  //     case "audi":
  //       return <Card data={{ content: "audi" }} />;
  //   }
  // };

  return (
    <div className="App">
      <LoginFullModal />
      {/* <label htmlFor="cars">Autovetture</label>
      <select name="cars" id="cars" onChange={onHandleChange}>
        {cars.map((car, i) => (
          <option value={car} key={i}>
            {car.toUpperCase()}
          </option>
        ))}
      </select>

      {onSelectRender()} */}
    </div>
  );
}

export default App;
