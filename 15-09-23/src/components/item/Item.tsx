import { memo } from "react";

import { ItemData } from "@/types/general";
import styles from "./index.module.scss";
import { supabase } from "@/pages/utils/supabase";

const Item = ({
  data,
  setListItemData,
}: {
  data: ItemData;
  setListItemData: any;
}) => {
  const { id, content } = data;

  const onHandleClick = async (event: React.MouseEvent<HTMLLIElement>) => {
    setListItemData((prev: ItemData[]) =>
      prev.filter((item) => item.id !== id)
    );

    await supabase.from("todo-list-data").delete().eq("id", id);
  };

  return (
    <li onClick={onHandleClick} className={styles.Item}>
      {content}
    </li>
  );
};

export default memo(Item);
