import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";
import ProductItem from "../productItem";

const ProductList = ({ listTitle = "Category" }) => {
  const [productList, setProductList] = useState({});
  // const [input, setInput] = useState("");

  useEffect(() => {
    GET("/products").then((data) => setProductList(data));
  }, []);

  // const onFilterInput = () =>
  //   onFilterCategory().filter((product) =>
  //     product.title.toLowerCase().includes(input.toLowerCase())
  //   );

  const onFilterCategory = () =>
    productList.products?.filter(
      (product) => product.category === listTitle.toLowerCase()
    );

  return (
    <div className="ProductList">
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
      <h2 className="ProductList__title">{listTitle}</h2>
      <div className="ProductList__container">
        {Object.keys(productList).length ? (
          onFilterCategory()?.map((product) => (
            <ProductItem productData={product} key={product.id} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
