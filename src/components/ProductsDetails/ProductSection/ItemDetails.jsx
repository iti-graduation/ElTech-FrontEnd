import React from 'react';
import singleProductImg from "../../../assets/images/shop/single-product.jpg"
import s1 from "../../../assets/images/shop/s1.png"

const ItemDetails = () => {
  return (
    <div className="row">
      <div className="col-lg-7 col-md-12">
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
      </div>
      <div className="col-lg-5 col-md-12">
        <div className="sin-product-details">
          <h3>Gaming Controller</h3>
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
          <div className="product-price clearfix">
            <span className="price">
              <span><span className="woocommerce-Price-currencySymbol">$</span>999.00</span>
            </span>
          </div>
          <div className="pro-excerp">
            <p>
              Sed id interdum urna. Nam ac elit a ante commodo tristique. tum vehicula a hendrerit ac nisi.
              hendrerit ac nisi Lorem ipsum dolor sit perdiet nibh vel magna lacinia ultrices. Sed id interdum urna.
            </p>
          </div>
          <div className="product-color">
            <h5>Color</h5>
            <div className="color-1"></div>
            <div className="color-2"></div>
            <div className="color-3"></div>
          </div>
          <div className="product-size">
            <h5>Size:</h5>
            <div className="size-wrapper">
              <div className="size-btn clearfix">
                <input type="radio" id="x" name="size" value="x" />
                <label htmlFor="x">x</label>
              </div>
              <div className="size-btn clearfix">
                <input type="radio" id="xr" name="size" value="xr" />
                <label htmlFor="xr">XR</label>
              </div>
              <div className="size-btn clearfix">
                <input checked="checked" type="radio" id="xs" name="size" value="xs" />
                <label htmlFor="xs">xs</label>
              </div>
              <div className="size-btn clearfix">
                <input type="radio" id="xm" name="size" value="xm" />
                <label htmlFor="xm">xm</label>
              </div>
            </div>
          </div>
          <div className="product-cart-qty">
            <div className="quantityd clearfix">
              <button className="qtyBtn btnMinus"><span>-</span></button>
              <input name="qty" value="1" title="Qty" className="input-text qty text carqty" type="text" />
              <button className="qtyBtn btnPlus">+</button>
            </div>
            <a href="#" className="add-to-cart-btn">Add To Cart</a>
            <a href="#" className="Whislist"><i className="twi-heart"></i></a>
            <a href="#" className="compare"><i className="twi-random"></i></a>
          </div>
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
