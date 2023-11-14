import { useEffect, useState } from "react";

import { getPopularProducts } from "../../api/services/user/product-services";

import NavBar from "../../components/Home/Popular/NavBar";
import { popularProducts } from "../../utils/demoProducts";
import NormalProductCard from "../../components/Shared/NormalProductCard/NormalProductCard";

const Popular = () => {
	const [products, setProducts] = useState();

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await getPopularProducts();
			console.log(data);
			setProducts(
				data.reduce((result, value, index, array) => {
					if (index % 2 === 0)
						result.push(array.slice(index, index + 2));
					return result;
				}, [])
			);
		};

		fetchProducts();
	}, []);

	useEffect(() => {
		const popular_tab_slider = window.$(".popular-tab-slider");
		const popular_tab_slider_two = window.$(".popular-tab-slider-two");

		popular_tab_slider.owlCarousel({
			loop: false,
			margin: 30,
			responsiveClass: true,
			dots: false,
			smartSpeed: 700,
			animateIn: "slideInRight",
			animateOut: "slideOutRight",
			nav: true,
			navText: [
				'<i class="twi-long-arrow-alt-left1"></i>',
				'<i class="twi-long-arrow-alt-right1"></i>',
			],
			items: 3,
			responsive: {
				0: {
					items: 1,
				},
				700: {
					items: 2,
				},
				992: {
					items: 3,
				},
			},
		});

		popular_tab_slider_two.owlCarousel({
			loop: false,
			margin: 40,
			responsiveClass: true,
			dots: false,
			smartSpeed: 700,
			animateIn: "slideInLeft",
			animateOut: "slideOutRight",
			nav: true,
			navText: [
				'<i class="twi-long-arrow-alt-left1"></i>',
				'<i class="twi-long-arrow-alt-right1"></i>',
			],
			items: 4,
			responsive: {
				0: {
					items: 1,
				},
				700: {
					items: 2,
					margin: 30,
				},
				992: {
					items: 3,
					margin: 30,
				},
				1200: {
					items: 4,
				},
			},
		});
	}, [products]);

	return (
		<section className="popular-section">
			{/*Shape Round*/}
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
						<NavBar />
						{/* <div className="tab-content">
              FIXME: Useless code built supposedly for responsiveness
              <div
                className="tab-pane fade show in active"
                id="all"
                role="tabpanel"
              >
              */}

						<div className="popular-tab-slider owl-carousel">
							{/* {popularProducts.map((productGroup, index) => (
								<div key={index} className="pp-single-slider">
									{productGroup.map((product, idx) => (
										<NormalProductCard
											key={idx}
											product={product}
											isPopularOrRelated={true}
										/>
									))}
								</div>
							))} */}
							{products &&
								products.map((productPair, index) => (
									<div
										key={index}
										className="pp-single-slider"
									>
										{productPair.map((product) => (
											<NormalProductCard
												key={product.id}
												product={product}
												isPopularOrRelated={true}
											/>
										))}
									</div>
								))}

							{/* <div className="pp-single-slider">
                <ProductCard
                  productImage={homeP1}
                  productName="Gaming Headset"
                  productPriceBefore={42.0}
                  productPriceAfter={38.0}
                  badgeClass="sale"
                  badgeName="Sale"
                />
                <ProductCard
                  productImage={homeP4}
                  productName="Camera Lens"
                  productPriceBefore={52.0}
                  productPriceAfter={48.0}
                  badgeClass="sale"
                  badgeName="Sale"
                />
              </div>
              <div className="pp-single-slider">
                <ProductCard
                  productImage={homeP2}
                  productName="Novo Headset A30"
                  noDiscount="d-none"
                  productPriceAfter={122.0}
                  badgeClass="hot"
                  badgeName="Hot"
                />
                <ProductCard
                  productImage={homeP5}
                  productName="TV Monitor Screen"
                  noDiscount="d-none"
                  productPriceAfter={222.0}
                />
              </div>
              <div className="pp-single-slider">
                <ProductCard
                  productImage={homeP6}
                  productName="Headset"
                  productPriceBefore={32.0}
                  productPriceAfter={28.0}
                  badgeClass="out-of-stock"
                  badgeName="Out of Stock"
                />
                <ProductCard
                  productImage={homeP3}
                  productName="Gaming Controller"
                  productPriceBefore={42.0}
                  productPriceAfter={38.0}
                />
              </div>
              <div className="pp-single-slider">
                <ProductCard
                  productImage={homeP6}
                  productName="Headset"
                  productPriceBefore={32.0}
                  productPriceAfter={28.0}
                  badgeClass="out-of-stock"
                  badgeName="Out of Stock"
                />
                <ProductCard
                  productImage={homeP3}
                  productName="Gaming Controller"
                  productPriceBefore={42.0}
                  productPriceAfter={38.0}
                />
              </div>
              <div className="pp-single-slider">
                <ProductCard
                  productImage={homeP1}
                  productName="Gaming Headset"
                  productPriceBefore={42.0}
                  productPriceAfter={38.0}
                  badgeClass="sale"
                  badgeName="Sale"
                />
                <ProductCard
                  productImage={homeP4}
                  productName="Camera Lens"
                  productPriceBefore={52.0}
                  productPriceAfter={48.0}
                  badgeClass="sale"
                  badgeName="Sale"
                />
              </div>
              <div className="pp-single-slider">
                <ProductCard
                  productImage={homeP2}
                  productName="Novo Headset A30"
                  noDiscount="d-none"
                  productPriceAfter={122.0}
                  badgeClass="hot"
                  badgeName="Hot"
                />
                <ProductCard
                  productImage={homeP5}
                  productName="TV Monitor Screen"
                  noDiscount="d-none"
                  productPriceAfter={222.0}
                />
              </div> */}
						</div>
					</div>
					{/*
              FIXME: Useless code built supposedly for responsiveness
              <div
                className="tab-pane fade in"
                id="smartphones"
                role="tabpanel"
              >
                <div className="popular-tab-slider owl-carousel">
                  <div className="pp-single-slider">
                    <ProductCard
                      productImage={homeP6}
                      productName="Gaming Headset"
                      productPriceBefore={42.0}
                      productPriceAfter={38.0}
                      badgeClass="sale"
                      badgeName="Sale"
                    />
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
          </div>*/}
				</div>
			</div>
		</section>
	);
};
export default Popular;
