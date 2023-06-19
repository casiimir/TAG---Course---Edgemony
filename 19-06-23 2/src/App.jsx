import { useState } from "react";
import MainNav from "./components/mainNav/MainNav";
import ProductList from "./components/productList";
import ProductItem from "./components/productItem";
import styles from "./App.module.scss";
import Hero from "./components/hero/Hero";

const Favourite = ({ list, setList }) => {
  return (
    <div className={styles.Favourite}>
      <h1>Lista preferiti</h1>
      <div className={styles.wrapper}>
        {list.map((product) => (
          <ProductItem
            productData={product}
            setFavouriteList={setList}
            isAdd={false}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const productCategories = [
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home-decoration",
  ];

  const [actualContent, setActualContent] = useState("home");
  const [favouriteList, setFavouriteList] = useState([]);

  const onActualContentRender = () => {
    switch (actualContent) {
      case "home":
        return <Hero />;
      case "favorite":
        return <Favourite list={favouriteList} setList={setFavouriteList} />;
      case "more":
        return <h1>MORE!</h1>;
      case "categories":
        return productCategories.map((cat, i) => (
          <ProductList
            listTitle={cat}
            setFavouriteList={setFavouriteList}
            key={i}
          />
        ));
    }
  };

  return (
    <div className={styles.App}>
      {onActualContentRender()}
      <MainNav setActualContent={setActualContent} />
    </div>
  );
}

export default App;
