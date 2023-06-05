import { useState, useEffect } from "react";
import TodoItem from "../todoItem";
import "./index.css";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [idNumber, setIdNumber] = useState(null);

  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log("UseEffect è stato invocato!");

    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setList(data.todos));

    // return () => console.log("UseEffect end");
  }, []);

  const onHandleClear = () => setList([]);

  const onHandlePopulate = () => setList(mockTodos);

  return (
    <div className="TodoList">
      {/* <button onClick={() => setCounter((prev) => prev - 1)}>prev</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>next</button> */}

      {
        // list.filter((todo) => todo.id !== idNumber)
        list.map((todo) => (
          <TodoItem content={todo} setIdNumber={setIdNumber} key={todo.id} />
        ))
      }
      <button onClick={onHandleClear}>clear</button>
      <button onClick={onHandlePopulate}>populate</button>
    </div>
  );
};

export default TodoList;
