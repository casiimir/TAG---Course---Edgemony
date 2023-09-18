import { useState } from "react";
import { supabase } from "@/pages/utils/supabase";
import styles from "./index.module.scss";

const AddItem = ({
  setListItemDataLoading,
}: {
  setListItemDataLoading: (value: boolean) => any;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const onHandleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    await supabase
      .from("todo-list-data")
      .insert([{ content: inputValue }])
      .select();

    setListItemDataLoading(false);
  };

  return (
    <form className={styles.AddItem} onSubmit={onHandleSubmit}>
      <input type="text" value={inputValue} onChange={onHandleChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddItem;
