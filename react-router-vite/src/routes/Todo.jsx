import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GeneralContext } from "../App";
import "../styles/routes/todo.css";

export default function Todo() {
  const state = useContext(GeneralContext);
  const location = useParams();
  const [todoData, setTodoData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/todos/${location.id}`)
      .then((res) => res.json())
      .then((data) => setTodoData(data));
  }, []);

  const { todo, userId, completed } = todoData;

  // console.log(state);

  return (
    <div className="Todo">
      <input type="checkbox" name="completed" checked={completed} />
      <h3>{todo}</h3>
      <p>{userId}</p>
    </div>
  );
}
