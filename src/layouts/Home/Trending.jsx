import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import {
	fetchUserCart,
	addCartProduct,
} from "../../api/services/user/cart-services";

import { cartCount } from "../../services/actions/cartSlice";

import { showToast } from "../../utils/toastUtil";
import { getProducts } from "../../api/services/user/product-services";
// import { getTrendingProducts } from "../../api/services/user/product-services";

// Importing ProductsRow component from Trending subdirectory in components folder
import ProductsRow from "../../components/Home/Trending/ProductsRow";
import ProductCard from "../../components/Home/Trending/ProductCard";

// Importing an image asset (shape2) from assets stored in project directory
import shape2 from "../../assets/images/home/shape2.png";

const Trending = () => {
	const [products, setProducts] = useState([]);

	const [cart, setCart] = useState([]);
	const [change, setChange] = useState(0);
	const dispatch = useDispatch();
	dispatch(cartCount(cart.length));

	const handleAddProductToCart = async (productID, quantity) => {
		try {
			await addCartProduct(productID, quantity);
			showToast("product added to cart successfully", "success");
		} catch (error) {
			showToast(error.toString());
		}
		setChange(change + 1);
	};

	useEffect(() => {
		fetchUserCart()
			.then((data) => {
				setCart(data.products);
			})
			.catch((err) => console.log(err));

		const fetchProducts = async () => {
			const data = await getProducts({ is_trending: 1 });
			console.log(data);

			if (
				data &&
				data.results &&
				JSON.stringify(data) !== JSON.stringify(products)
			) {
				setProducts(
					// data.results.reduce((result, value, index, array) => {
					// 	if (index % 2 === 0)
					// 		result.push(array.slice(index, index + 2));
					// 	console.log("Result", result);
					// 	return result;
					// }, [])
					data.results
				);
			}
		};

		fetchProducts();
	}, [change]);

	// useEffect(() => {
	// 	var trending_slider = window.$(".trending-slider");

	// 	trending_slider.owlCarousel({
	// 		loop: false,
	// 		margin: 0,
	// 		responsiveClass: true,
	// 		dots: false,
	// 		smartSpeed: 700,
	// 		animateIn: "slideInRight",
	// 		animateOut: "slideOutRight",
	// 		nav: true,
	// 		navText: [
	// 			'<i class="twi-long-arrow-alt-left1"></i>',
	// 			'<i class="twi-long-arrow-alt-right1"></i>',
	// 		],
	// 		items: 1,
	// 	});
	// }, [products]);
	useEffect(() => {
		var trending_slider = window.$(".trending-slider");

		if (trending_slider.length > 0) {
			console.log("Products", products);
			trending_slider.owlCarousel({
				loop: false,
				margin: 0,
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
				items: 1,
			});
		}
	}, [products]);

	return (
		<section
			className="trending-section"
			style={{
				backgroundImage: `url(${shape2})`,
			}}
		>
			<div className="sec-heading rotate-tb">
				Trending <span> Products</span>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="sec-title">Trending Products</h2>
						<p className="sec-desc">
							Discover the products that are trending right now.
						</p>
					</div>
				</div>
				{/* <div className="row">
					<div className="col-lg-12">
						<div className="trending-slider owl-carousel">
							{products &&
								products.map((productPair, index) => (
									<ProductsRow
										key={index}
										products={productPair}
										handleAddProductToCart={
											handleAddProductToCart
										}
									/>
								))}
							<div className="row">
								{products.map((product) => {
									return (
										<div
											key={product.id}
											className="col-lg-6 col-md-6"
										>
											<ProductCard
												product={product}
												handleAddProductToCart={
													handleAddProductToCart
												}
											/>
										</div>
									);
								})}
							</div>
							<div className="row">
								{products.map((product) => {
									return (
										<div
											key={product.id}
											className="col-lg-6 col-md-6"
										>
											<ProductCard
												product={product}
												handleAddProductToCart={
													handleAddProductToCart
												}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div> */}
				{/* <div class="row">
					<div class="col-lg-12">
						<div class="trending-slider owl-carousel">
							<div class="row">
								<div class="col-lg-7 col-md-7">
									<div class="single-trending-product">
										<div class="trend-thumb">
											<img
												src="assets/images/home/t1.jpg"
												alt=""
											/>
										</div>
										<div class="tr-pro-detail">
											<h3>
												<a href="single-product.html">
													TV Remove Controller
												</a>
												<div class="product-price clearfix">
													<span class="price">
														<span>
															<span class="woocommerce-Price-currencySymbol">
																$
															</span>
															112.00
														</span>
													</span>
												</div>
											</h3>
											<p>
												Nemo enim ipsam voluptatem quia
												voluptas sit aspernatur aut odit
												aut fugit, sed quia consequuntur
												magni dolores eos qui ratione
												voluptatem sequid.
											</p>
											<a class="tr-atc" href="#">
												Add To Cart
											</a>
										</div>
									</div>
								</div>
								<div class="col-lg-5 col-md-5">
									<div class="single-trending-product">
										<div class="trend-thumb">
											<img
												src="assets/images/home/t2.jpg"
												alt=""
											/>
										</div>
										<div class="tr-pro-detail">
											<h3>
												<a href="single-product.html">
													Camera Lenses
												</a>
												<div class="product-price clearfix">
													<span class="price">
														<span>
															<span class="woocommerce-Price-currencySymbol">
																$
															</span>
															72.00
														</span>
													</span>
												</div>
											</h3>
											<p>
												Nemo enim ipsam voluptatem quia
												voluptas sit aspernatur aut odit
												aut fugit, sed quia conse.
											</p>
											<a class="tr-atc" href="#">
												Add To Cart
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-5 col-md-5">
									<div class="single-trending-product">
										<div class="trend-thumb">
											<img
												src="assets/images/home/t2.jpg"
												alt=""
											/>
										</div>
										<div class="tr-pro-detail">
											<h3>
												<a href="single-product.html">
													Camera Lenses
												</a>
												<div class="product-price clearfix">
													<span class="price">
														<span>
															<span class="woocommerce-Price-currencySymbol">
																$
															</span>
															72.00
														</span>
													</span>
												</div>
											</h3>
											<p>
												Nemo enim ipsam voluptatem quia
												voluptas sit aspernatur aut odit
												aut fugit, sed quia conse.
											</p>
											<a class="tr-atc" href="#">
												Add To Cart
											</a>
										</div>
									</div>
								</div>
								<div class="col-lg-7 col-md-7">
									<div class="single-trending-product">
										<div class="trend-thumb">
											<img
												src="assets/images/home/t1.jpg"
												alt=""
											/>
										</div>
										<div class="tr-pro-detail">
											<h3>
												<a href="single-product.html">
													TV Remove Controller
												</a>
												<div class="product-price clearfix">
													<span class="price">
														<span>
															<span class="woocommerce-Price-currencySymbol">
																$
															</span>
															112.00
														</span>
													</span>
												</div>
											</h3>
											<p>
												Nemo enim ipsam voluptatem quia
												voluptas sit aspernatur aut odit
												aut fugit, sed quia consequuntur
												magni dolores eos qui ratione
												voluptatem sequid.
											</p>
											<a class="tr-atc" href="#">
												Add To Cart
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				{/* <div className="row">
					<div className="col-lg-12">
						{products && (
							<div className="trending-slider owl-carousel">
								{products.map((productPair, index) => (
									<ProductsRow
										key={index}
										products={productPair}
										handleAddProductToCart={
											handleAddProductToCart
										}
									/>
								))}
							</div>
						)}
					</div>
				</div> */}
				<div className="row">
					<div className="col-lg-12">
						{products && (
							<div
								className="trending-slider owl-carousel"
								key={products.length}
							>
								{Array.from(
									{ length: Math.ceil(products.length / 2) },
									(_, index) => (
										<div className="row" key={index}>
											{products
												.slice(index * 2, index * 2 + 2)
												.map((product) => (
													<div
														key={product.id}
														className="col-lg-6 col-md-6"
													>
														<ProductCard
															product={product}
															handleAddProductToCart={
																handleAddProductToCart
															}
														/>
													</div>
												))}
										</div>
									)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Trending;
