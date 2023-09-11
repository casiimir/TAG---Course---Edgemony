import Link from "next/link";
// import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [todoUserInput, setTodoUserInput] = useState("");
  const [todoListData, setTodoListData] = useState([]);
  const [isAddTodoItem, setAddTodoItem] = useState(false);

  useEffect(() => {
    fetch("/api/supabase", {
      headers: {
        getfromdb: "true",
      },
    })
      .then((res) => res.json())
      .then((supabaseList) => setTodoListData(supabaseList.data.data));
  }, [isAddTodoItem]);

  const onHandleInput = (e) => setTodoUserInput(e.target.value);

  const onHandleFormSubmit = async (e) => {
    e.preventDefault();

    // await supabase
    //   .from("todo-list-data")
    //   .insert([{ content: todoUserInput }])
    //   .select();

    await fetch("/api/supabase", {
      method: "POST",
      headers: {
        writeOnDb: "true",
      },
      body: JSON.stringify({
        table: "todo-list-data",
        column: "content",
        value: todoUserInput,
      }),
    });

    setAddTodoItem((prev) => !prev);
    setTodoUserInput("");
  };

  return (
    <div className="TodoList">
      <h1>Todo</h1>
      <Link href="/">Homepage</Link>

      {todoListData.length && (
        <ul>
          {todoListData?.map((todoItem) => (
            <li key={todoItem.id}>{todoItem.content}</li>
          ))}
        </ul>
      )}

      <form onSubmit={onHandleFormSubmit}>
        <input
          type="text"
          placeholder="Aggiunge todo"
          value={todoUserInput}
          onChange={onHandleInput}
        />
        <input type="submit" value="Aggiungi" />
      </form>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const todoListData = await supabase.from("todo-list-data").select("*");

//   return {
//     props: {
//       todoListData,
//     },
//   };
// }
