import { useState, useEffect } from "react";
import Card from "../card";
import { GET } from "@/utils/HTTP";
import styles from "./index.module.scss";

const CardList = ({ title }) => {
  const [list, setList] = useState([]);
  const [backupList, setBackupList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    try {
      GET("https://api.npoint.io/2eb963f4e6878e21cfd8")
        .then((data) => {
          setList(data);
          setBackupList(data);
        })
        .then(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onClearList = () => setList([]);
  const onPopulateList = () => setList(backupList);

  return (
    <>
      <h1>{title}</h1>
      {isLoading ? (
        <div className={styles.ldsCircle}>
          <div></div>
        </div>
      ) : (
        <div className={styles.list}>
          {list.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      )}

      <button onClick={onClearList}>cancella lista</button>
      <button onClick={onPopulateList}>popola lista</button>
    </>
  );
};

export default CardList;
