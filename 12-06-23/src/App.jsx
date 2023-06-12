import { useState } from "react";
import "./App.css";
import MainNav from "./components/mainNav/MainNav";
import ProductList from "./components/productList";

function App() {
  const productCategories = [
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home-decoration",
  ];

  const [actualContent, setActualContent] = useState("category");

  return (
    <div className="App">
      {actualContent === "home" && <h1>HOMEPAGE!</h1>}
      {actualContent === "favorite" && <h1>FAV!</h1>}
      {actualContent === "more" && <h1>MORE!</h1>}
      {actualContent === "categories" &&
        productCategories.map((cat, i) => (
          <ProductList listTitle={cat} key={i} />
        ))}
      <MainNav setActualContent={setActualContent} />
    </div>
  );
}

export default App;
