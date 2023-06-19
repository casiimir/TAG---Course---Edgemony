import { useState, useEffect, useCallback } from "react";
import { GET } from "../../utils/http";
import "./index.scss";
import ProductItem from "../productItem";

const ProductList = ({ listTitle = "Category", setFavouriteList }) => {
  const [productList, setProductList] = useState({});
  const [isVisible, setVisibility] = useState(false);
  // const [input, setInput] = useState("");

  useEffect(() => {
    GET("/products").then((data) => setProductList(data));
  }, []);

  // const onFilterInput = () =>
  //   onFilterCategory().filter((product) =>
  //     product.title.toLowerCase().includes(input.toLowerCase())
  //   );

  const onFilterCategory = () => {
    return productList.products?.filter(
      (product) => product.category === listTitle.toLowerCase()
    );
  };
  // const onFilterCatCached = useCallback(onFilterCategory);

  return (
    <div className="ProductList">
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
      <h2 className="ProductList__title">{listTitle}</h2>
      <input
        type="checkbox"
        checked={isVisible}
        onChange={(e) => setVisibility(e.target.checked)}
      />
      {isVisible && (
        <div className="ProductList__container">
          {Object.keys(productList).length ? (
            onFilterCategory()
              ?.sort((first, second) => first.title - second.title)
              .map((product) => (
                <ProductItem
                  productData={product}
                  setFavouriteList={setFavouriteList}
                  isAdd={true}
                  key={product.id}
                />
              ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
