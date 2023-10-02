import { memo } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const AtomSearchItem = ({ item }: { item: any }) => {
  const router = useRouter();

  const onHandleClick = () => router.push(`/${item.edition_key[0]}`);

  return (
    <div className={styles.AtomSearchItem} key={item.printdisabled_s}>
      <div className={styles.generic}>
        {item.type === "work" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            preserveAspectRatio="none"
          >
            <rect width="16" height="16" rx="8" fill="#41615E"></rect>
            <circle cx="8" cy="6" r="1" fill="#E9DDB8"></circle>
            <circle cx="8" cy="10" r="1" fill="#E9DDB8"></circle>
            <circle
              cx="6"
              cy="8"
              r="1"
              transform="rotate(-90 6 8)"
              fill="#E9DDB8"
            ></circle>
            <circle
              cx="10"
              cy="8"
              r="1"
              transform="rotate(-90 10 8)"
              fill="#E9DDB8"
            ></circle>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            preserveAspectRatio="none"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 1 1 0 8z" fill="#A1444F"></path>
            <circle cx="8" cy="6" r="2" fill="#E9DDB8"></circle>
            <path d="M5 12a3 3 0 1 1 6 0H5z" fill="#E9DDB8"></path>
          </svg>
        )}
        <p>{item.type}</p>
      </div>
      <b onClick={onHandleClick}>{item.title}</b>
      <p>{item.first_sentence || item.subtitle || item.title_suggest}</p>
    </div>
  );
};

export default memo(AtomSearchItem);
