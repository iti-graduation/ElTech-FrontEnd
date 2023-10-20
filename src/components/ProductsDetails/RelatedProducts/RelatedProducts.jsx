import React from "react";
import image5 from "../../../assets/images/shop/5.jpg";
import ProductCard from "../../Home/Popular/ProductCard";

const RelatedProducts = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="related-product-area">
          <h3>Related Products</h3>
          <div className="related-slider owl-carousel">
            <ProductCard
              productImage={image5}
              badgeClass="sale"
              badgeName="Sale"
              productPriceAfter={38}
              productPriceBefore={42}
              productName="VRBOX Gaming"
            />
            <ProductCard
              productImage={image5}
              badgeClass="hot"
              badgeName="Hot"
              productPriceAfter={38}
              productPriceBefore={42}
              productName="Gaming Mouse"
            />
            <ProductCard
              productImage={image5}
              noDiscount="d-none"
              productPriceAfter={122}
              productName="Wirless Headset"
            />
            <ProductCard
              productImage={image5}
              badgeClass="sale"
              badgeName="Sale"
              productPriceAfter={38}
              productPriceBefore={42}
              productName="VRBOX Gaming"
            />
            <ProductCard
              productImage={image5}
              badgeClass="hot"
              badgeName="Hot"
              productPriceAfter={38}
              productPriceBefore={42}
              productName="Gaming Mouse"
            />
            <ProductCard
              productImage={image5}
              noDiscount="d-none"
              productPriceAfter={122}
              productName="Wirless Headset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
