import React from 'react';


const ProductSlider = ({ singleProductImg, s1 }) => {
  return (
    <div id="product-slider" className="carousel slide product-slider" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="ps-img">
            <img src={singleProductImg} alt="" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="ps-img">
            <img src={singleProductImg} alt="" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="ps-img">
            <img src={singleProductImg} alt="" />
          </div>
        </div>
      </div>
      <ol className="carousel-indicators clearfix">
        <li data-target="#product-slider" data-slide-to="0" className="active">
          <img src={s1} alt="" />
        </li>
        <li data-target="#product-slider" data-slide-to="1">
          <img src={s1} alt="" />
        </li>
        <li data-target="#product-slider" data-slide-to="2">
          <img src={s1} alt="" />
        </li>
      </ol>
    </div>
  );
};

export default ProductSlider;
