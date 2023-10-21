import React from "react";

const ProductAddToCart = () => {
  return (
    <div className="sp-details-hover">
      <a className="sp-cart" href="#">
        <i className="twi-cart-plus"></i>
        <span>Add to cart</span>
      </a>
      <a className="sp-wishlist" href="#">
        <i className="twi-heart2"></i>
      </a>
    </div>
  );
};

export default ProductAddToCart;
