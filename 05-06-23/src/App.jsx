import { useState } from "react";
import TodoList from "./components/todoList";
import "./App.css";

function App() {
  // const [myVar, setMyVar] = useState(0);
  // let myVar = 0;  <-- Questo non va più bene in React, usare piuttosto useState

  // let mockObj = {
  //   id: 1,
  //   todo: "Do something nice for someone I care about",
  //   completed: true,
  //   userId: 26,
  // };

  const onHandleClick = (evt) => {
    console.log(evt);
    evt.preventDefault();
    console.log("///");
    console.log("///");
    console.log("///");
    console.log("///");
    console.log("///");
  };

  return (
    <div className="App">
      <h1 onMouseUp={onHandleClick}>My todo list</h1>
      <TodoList />
      {/* <h1>Valore attuale: {myVar}</h1> */}
      {/* <button
        onClick={() => {
          // myVar = myVar + 1; // non va più bene, bisogna usare il metodo di modifica
          setMyVar((prev) => (prev += 1));
        }}
      >
        Incrementa
      </button> */}
    </div>
  );
}

export default App;
