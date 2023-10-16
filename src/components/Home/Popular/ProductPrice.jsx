import React from "react";

const ProductPrice = ({
  productPriceBefore,
  productPriceAfter,
  noDiscount,
}) => {
  return (
    <div className="product-price clearfix">
      <span className="price">
        <del className={noDiscount}>
          <span>
            <span className="woocommerce-Price-currencySymbol">$</span>
            {productPriceBefore}
          </span>
        </del>
        <ins>
          <span>
            <span className="woocommerce-Price-currencySymbol">$</span>
            {productPriceAfter}
          </span>
        </ins>
      </span>
    </div>
  );
};

export default ProductPrice;
