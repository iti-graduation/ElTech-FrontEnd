import React from 'react';
import ItemDetails from '../../components/ProductsDetails/ProductSection/ItemDetails';
import ProductTab from '../../components/ProductsDetails/ProductsTab/ProductTab';
import RelatedProducts from '../../components/ProductsDetails/RelatedProducts/RelatedProducts';

const ProductSection = () => {
  return (
    <section className="single-product-section">
      <div className="container">
          <ItemDetails/>
          <ProductTab/>
          <RelatedProducts/>
      </div>
    </section>
  );
}

export default ProductSection;
