import styles from "./index.module.scss";

const Product = ({ data }) => {
  return (
    <div className={styles.Product}>
      <img src={data.thumbnail} alt={data.title} />
      <h1>{data.title}</h1>
    </div>
  );
};

export default Product;
