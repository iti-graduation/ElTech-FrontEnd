import React from "react";
import homeP1 from "../../assets/images/home/p1.jpg";
import homeP2 from "../../assets/images/home/p2.jpg";
import homeP3 from "../../assets/images/home/p3.jpg";
import homeP4 from "../../assets/images/home/p4.jpg";
import homeP5 from "../../assets/images/home/p5.jpg";
import homeP6 from "../../assets/images/home/p6.jpg";

const Popular = () => {
  return (
    <section className="popular-section">
      {/* Shape Round */}
      <div className="shape-round">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Shape Round */}
      {/* Section Heading */}
      <div className="sec-heading rotate-rl">
        Most <span>Popular</span>
      </div>
      {/* Section Heading */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="sec-title">Most Popular</h2>
            <ul className="product-tab-title nav nav-tabs">
              <li>
                <a className="active" href="#all" data-toggle="tab">
                  All
                </a>
              </li>
              <li>
                <a href="#smartphones" data-toggle="tab">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#camera" data-toggle="tab">
                  Camera
                </a>
              </li>
              <li>
                <a href="#gadgets" data-toggle="tab">
                  Gadgets
                </a>
              </li>
              <li>
                <a href="#others" data-toggle="tab">
                  Others
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show in active"
                id="all"
                role="tabpanel"
              >
                <div className="popular-tab-slider owl-carousel">
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade in"
                id="smartphones"
                role="tabpanel"
              >
                <div className="popular-tab-slider owl-carousel">
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade in" id="camera" role="tabpanel">
                <div className="popular-tab-slider owl-carousel">
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade in" id="gadgets" role="tabpanel">
                <div className="popular-tab-slider owl-carousel">
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade in" id="others" role="tabpanel">
                <div className="popular-tab-slider owl-carousel">
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP6} alt="" />
                        <div className="pro-badge">
                          <p className="out-of-stock">Out of Stock</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                32.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                28.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP3} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Controller</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP1} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Gaming Headset</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                42.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                38.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP4} alt="" />
                        <div className="pro-badge">
                          <p className="sale">Sale</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Camera Lens</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <del>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                52.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                48.00
                              </span>
                            </ins>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-slider">
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP2} alt="" />
                        <div className="pro-badge">
                          <p className="hot">Hot</p>
                        </div>
                      </div>
                      <div className="sp-details">
                        <h4>Novo Headset A30</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              122.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-popular-product">
                      <div className="sp-thumb">
                        <img src={homeP5} alt="" />
                      </div>
                      <div className="sp-details">
                        <h4>TV Monitor Screen</h4>
                        <div className="product-price clearfix">
                          <span className="price">
                            <span>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              222.00
                            </span>
                          </span>
                        </div>
                        <div className="sp-details-hover">
                          <a className="sp-cart" href="#">
                            <i className="twi-cart-plus"></i>
                            <span>Add to cart</span>
                          </a>
                          <a className="sp-wishlist" href="#">
                            <i className="twi-heart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Popular;
