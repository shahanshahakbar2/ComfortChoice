import React from "react";
import "./card.css";
import Button from "./../button/Button";

const Card = ({ product }) => {
  return (
    <>
      <div class="card">
        <img
          src={product.productImg}
          alt="Product Image"
          class="product-image"
        />
        <div class="product-name">{product.productName}</div>
        <div class="product-price">&#8377; {product.productPrice}</div>
        <Button />
      </div>
    </>
  );
};

export default Card;
