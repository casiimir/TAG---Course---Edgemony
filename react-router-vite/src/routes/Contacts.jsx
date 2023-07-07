import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import "../styles/routes/contacts.css";

export default function Contacts() {
  const [params, setParams] = useSearchParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products[0]));
  }, []);

  const search = params.get("search") || "ciao";
  const user = params.get("user");
  const range = params.get("range");
  const { title, thumbnail } = product;

  const onHandleClick = () => {
    /// ...
    navigate("/"); // Redirect - analogo a <Link /> ma in versione js (piuttosto che JSX)
  };

  return (
    <div className="Contacts">
      {/* {
        product ? <h1>{product[0]?.title}</h1> : null
      } */}
      <h1>{title}</h1>
      <img src={thumbnail} alt={title} />
      <button>
        Go back
        <Link to="/">Go back</Link>
      </button>
    </div>
  );
}
