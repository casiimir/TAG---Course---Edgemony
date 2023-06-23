import { useState, useEffect, useCallback } from "react";
import { useDummyJson } from "../../common/hooks";
import "./index.scss";
import ProductItem from "../productItem";

const ProductList = ({ listTitle = "Category", setFavouriteList }) => {
  const [isVisible, setVisibility] = useState(false);

  const dummyJson = useDummyJson("/products", listTitle);
  const { productList, onFilterCategory } = dummyJson;

  return (
    <div className="ProductList">
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
