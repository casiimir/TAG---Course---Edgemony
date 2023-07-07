import { Outlet } from "react-router-dom";
import { useReducer, createContext } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_AGE_TO_50":
      return {
        ...state,
        age: action.payload,
      };
    case "INCREMENT":
      return {
        ...state,
        age: state.age + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        age: state.age - 1,
      };
    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    // case "SET_PASSWORD":
    //   return {
    //     ...state,
    //     password: action.payload,
    //   };
  }
}

export const GeneralContext = createContext();

const globalStore = {
  age: 1,
  username: "Paperino",
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalStore);

  const onHandleAge50 = () => {
    dispatch({ type: "CHANGE_AGE_TO_50", payload: 50 });
  };

  const onHandleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onHandleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <GeneralContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Form />
        <h1>HOME</h1>
        <p>La mia età è: {state.age}</p>
        <Outlet />

        <button onClick={onHandleAge50}>Porta a 50</button>
        <button onClick={onHandleDecrement}>Decrementa</button>
        <button onClick={onHandleIncrement}>Incrementa</button>
      </GeneralContext.Provider>
    </>
  );
}

export default App;
