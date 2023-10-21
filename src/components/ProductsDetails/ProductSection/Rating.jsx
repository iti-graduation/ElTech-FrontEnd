import React from 'react';

const ProductRatingReviews = () => {
  return (
    <div className="woocommerce-product-rating">
      <div className="star-rating">
        <i className="twi-star"></i>
        <i className="twi-star"></i>
        <i className="twi-star"></i>
        <i className="twi-star"></i>
        <span>
          <i className="twi-star"></i>
        </span>
      </div>
      <a href="#" className="woocommerce-review-link">
        <span className="count">03</span> customer reviews
      </a>
    </div>
  );
};

export default ProductRatingReviews;
