import { useState, useEffect } from "react";
import styles from "./index.module.css";

const ListItems = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((data) => setProductList(data.products));
  }, []);

  return (
    <div className="ListItems">
      {productList.map((product) => (
        <h3 key={product.id}>{product.title}</h3>
      ))}
    </div>
  );
};

export default ListItems;
