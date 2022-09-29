import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, Time, Details } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>
          <small>{Details}</small>
        </p>
        <p>
          <small>Time: {Time} Days</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Product;
