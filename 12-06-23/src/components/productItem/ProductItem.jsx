import "./index.css";

const ProductItem = ({ productData }) => {
  return (
    <div className="ProductItem">
      <img
        className="ProductItem__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <h4 className="ProductItem__title">{productData.title}</h4>
      <p className="ProductItem__category">{productData.category}</p>
      <div className="ProductItem__extra">
        <h3 className="ProductItem__extra--price">${productData.price}</h3>
        <button className="ProductItem__extra--add">+</button>
      </div>
    </div>
  );
};

export default ProductItem;
