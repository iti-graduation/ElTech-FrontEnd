import React from 'react';
import singleProductImg from "../../../assets/images/shop/single-product.jpg"
import s1 from "../../../assets/images/shop/s1.png"
import ProductSizeOptions from './SizeOptions';
import ProductCartQty from './CartQty';
import ProductRatingReviews from './Rating';
import ProductPrice from './PriceComp';
import ProductSlider from './ImageSlider';
import ProductColorOptions from './ProductColor';

const ItemDetails = () => {
  return (
    <div className="row">
      <div className="col-lg-7 col-md-12">
        <ProductSlider singleProductImg={singleProductImg} s1={s1}/>
      </div>
      <div className="col-lg-5 col-md-12">
        <div className="sin-product-details">
          <h3>Gaming Controller</h3>
          <ProductRatingReviews/>
          <ProductPrice/>
          <div className="pro-excerp">
            <p>
              Sed id interdum urna. Nam ac elit a ante commodo tristique. tum vehicula a hendrerit ac nisi.
              hendrerit ac nisi Lorem ipsum dolor sit perdiet nibh vel magna lacinia ultrices. Sed id interdum urna.
            </p>
          </div>
          <ProductColorOptions/>
          <ProductSizeOptions/>
          <ProductCartQty/>
          <div className="pro-socila">
            <a href="#"><i className="twi-facebook"></i></a>
            <a href="#"><i className="twi-twitter-square"></i></a>
            <a href="#"><i className="twi-pinterest-square"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
