import { useEffect, useState } from "react";
import Item from "../item";

import { ItemData } from "@/types/general";
import styles from "./index.module.scss";

const ListItem = ({ data }: { data: ItemData[] }) => {
  const [listItemData, setListItemData] = useState<ItemData[]>([]);

  useEffect(() => {
    setListItemData(data);
  }, []);

  return (
    <ul className={styles.ListItem}>
      {listItemData.map((item) => (
        <Item data={item} setListItemData={setListItemData} key={item.id} />
      ))}
    </ul>
  );
};

export default ListItem;
