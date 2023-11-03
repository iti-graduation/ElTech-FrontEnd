import React from "react";

const ProductPrice = ({
  productPriceBefore,
  productPriceAfter,
}) => {

  return (
    <div className="product-price clearfix">
      <span className="price">
        <del className={productPriceAfter == null? "d-none":""}>
          <span>
            <span className="woocommerce-Price-currencySymbol">$</span>
            {productPriceBefore}
          </span>
        </del>
        <ins>
          <span>
            <span className="woocommerce-Price-currencySymbol">$</span>
            {productPriceAfter??productPriceBefore}
          </span>
        </ins>
      </span>
    </div>
  );
};

export default ProductPrice;
