import Image from "next/image";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  const { title, link, description } = data;

  return (
    <div className={styles.Card}>
      <Image src={link} width="200" height="200" alt={title} />
      <div className={styles.texts}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
