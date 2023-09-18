import { Dispatch, SetStateAction, memo } from "react";
import { ItemData } from "@/types/general";
import { HTTP_DELETE } from "@/pages/utils/fn";
import styles from "./index.module.scss";

const Item = ({
  data,
  setListItemDataLoading,
}: {
  data: ItemData;
  setListItemDataLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const { id, content } = data;

  const onHandleClick = async () => {
    HTTP_DELETE("/api/deleteItemList", id);
    setListItemDataLoading(false);
  };

  return (
    <li onClick={onHandleClick} className={styles.Item}>
      {content}
    </li>
  );
};

export default memo(Item);
