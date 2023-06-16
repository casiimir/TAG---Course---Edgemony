import styles from "./index.module.scss";

const ProductItem = ({ productData, setFavouriteList }) => {
  const onHandleAddProduct = () => {
    setFavouriteList((prev) => [...prev, productData]);
  };

  return (
    <div className={styles.ProductItem}>
      <img
        className={styles.image}
        src={productData.thumbnail}
        alt={productData.title}
      />
      <h4 className={styles.title}>{productData.title}</h4>
      <p className={styles.category}>{productData.category}</p>
      <div className={styles.extra}>
        <h3 className={styles.extraPrice}>${productData.price}</h3>
        <button className={styles.extraAdd} onClick={onHandleAddProduct}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
