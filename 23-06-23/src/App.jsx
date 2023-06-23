import { useState, useMemo, useCallback, useEffect } from "react";
import MainNav from "./components/mainNav/MainNav";
import ProductList from "./components/productList";
import ProductItem from "./components/productItem";
import styles from "./App.module.scss";
import Hero from "./components/hero/Hero";

import { useCamera } from "./common/hooks";

const Favourite = ({ list, setList }) => {
  const List = useMemo(() => list, [list]);

  return (
    <div className={styles.Favourite}>
      <h1>Lista preferiti</h1>
      <div className={styles.wrapper}>
        {List.map((product) => (
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

  // const camera = useCamera();

  return (
    <div className={styles.App}>
      {onActualContentRender()}
      <MainNav setActualContent={setActualContent} />
      {/* <video ref={camera.videoRef}></video>
      <button onClick={camera.onStopVideo}>STOP</button> */}
    </div>
  );
}

export default App;

// Array.sort((a, b) => {
//   if(a.id > b.id) return -1;
//   if(a.id < b.id) return 1;
//   return 0;
// })
