import React from 'react';

import img1 from "../../assets/images/home/1.jpg";
import shape3 from "../../assets/images/home/shape3.png";

function WeeklyDeal() {
  return (
  <section className="coupone-discount-sec" id="coupone">

    <div className="sec-heading rotate-tb">
      Coupon <span>Deals</span>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-5">
          <div className="dis-product-detail">
            <h4>Weekly Deal</h4>
            <div className="product-price clearfix">
              <span className="price">
                <span>
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  179.00
                </span>
              </span>
            </div>
            <div
              id="countdown-coupone"
              className="clearfix"
              data-day={20}
              data-month={11}
              data-year={2023}
            ></div>
            <a className="goru-btn" href="single-product.html">
              Shop Now
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-7">
          <div className="dis-pro-thumb">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="couple-shape">
      <img src={shape3} alt="" />
    </div>
  </section>
  )
}

export default WeeklyDeal
