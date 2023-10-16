import React from "react";
import ProductPrice from "./ProductPrice";
import ProductAddToCart from "./ProductAddToCart";

const ProductCard = ({
  productImage,
  productPriceBefore,
  productPriceAfter,
  noDiscount,
  productName,
  badgeClass,
  badgeName,
}) => {
  return (
    <>
      <div className="single-popular-product">
        <div className="sp-thumb">
          <img src={productImage} alt="" />
          <div className="pro-badge">
            <p className={badgeClass}>{badgeName}</p>
          </div>
        </div>
        <div className="sp-details">
          <h4>{productName}</h4>
          <ProductPrice
            productPriceBefore={productPriceBefore}
            productPriceAfter={productPriceAfter}
            noDiscount={noDiscount}
          />
          <ProductAddToCart />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
