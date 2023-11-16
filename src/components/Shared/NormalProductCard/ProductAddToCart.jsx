import React from "react";
import { Link } from "react-router-dom";

const ProductAddToCart = ({ handleAddProductToCart, productID }) => {
  return (
    <div className="sp-details-hover">
      <Link className="sp-cart" 
      onClick={() => handleAddProductToCart(productID)}
      >
        <i className="twi-cart-plus"></i>
        <span>Add to cart</span>
      </Link>
      <a className="sp-wishlist" href="#">
        <i className="twi-heart2"></i>
      </a>
    </div>
  );
};

export default ProductAddToCart;
