import { memo, useId } from "react";
import styles from "./index.module.scss";

const ProductItem = ({ productData, setFavouriteList, isAdd }) => {
  const uuid = useId();

  const onHandleAddProduct = () => {
    setFavouriteList((prev) => [...prev, { ...productData, uuid }]);
  };

  const onHandleRemoveProduct = () => {
    setFavouriteList((prev) =>
      prev.filter((product) => productData.id !== product.id)
    );
  };

  return (
    <div className={styles.ProductItem} id={uuid}>
      <img
        className={styles.image}
        src={productData.thumbnail}
        alt={productData.title}
      />
      <h4 className={styles.title}>{productData.title}</h4>
      <p className={styles.category}>{productData.category}</p>
      <div className={styles.extra}>
        <h3 className={styles.extraPrice}>${productData.price}</h3>
        <button
          className={isAdd ? styles.extraAdd : styles.extraRemove}
          onClick={isAdd ? onHandleAddProduct : onHandleRemoveProduct}
        >
          {isAdd ? "+" : "-"}
        </button>
      </div>
    </div>
  );
};

export default memo(ProductItem);
