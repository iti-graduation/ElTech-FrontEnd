import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getProducts } from "../../../api/services/user/product-services";
import {
	fetchUserCart,
	addCartProduct,
} from "../../../api/services/user/cart-services";

import { cartCount } from "../../../services/actions/cartSlice";

import { showToast } from "../../../utils/toastUtil";
import ShopDetailsCategories from "./ShopDetailsCategories";
import shopImageHolder370x460 from "../../../assets/images/shop/holder370x460.jpg";
import NormalProductCard from "../../Shared/NormalProductCard/NormalProductCard";
import ShopPagination from "../ShopPagination/ShopPagination";

const ShopDetails = () => {
	const [products, setProducts] = useState([]);
	const location = useLocation();
	const [currentPage, setCurrentPage] = useState(0);
	const [activeItem, setActiveItem] = useState("ALL");
	const [activeFilter, setActiveFilter] = useState("default");

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

	const handlePageClick = (data) => {
		let selected = data.selected;
		setCurrentPage(selected);
		fetchProducts({ page: selected + 1 });
	};

	const handleFilterChange = async (categoryId, orderFilter) => {
		let filter = {};

		if (categoryId !== "ALL") {
			filter.category = categoryId;
		}

		if (orderFilter === "price" || orderFilter === "-price") {
			filter.ordering = orderFilter;
		} else if (orderFilter === "popular") {
			filter.is_popular = "1";
		}

		fetchProducts(filter);
	};

	const handleSelectChange = async (event) => {
		const selectedValue = event.target.value;
		handleFilterChange(activeItem, selectedValue);
	};

	const handleCategoryClick = (categoryId) => {
		handleFilterChange(categoryId, activeFilter);
		setActiveItem(categoryId);
	};

	useEffect(() => {
		fetchUserCart()
			.then((data) => {
				setCart(data.products);
			})
			.catch((err) => console.log(err));

		if (
			location.pathname.includes("/search") &&
			location.state?.searchTerm
		) {
			fetchProducts({ q: location.state.searchTerm });
		} else {
			fetchProducts();
		}
	}, [location, change]);

	const fetchProducts = async (filter = {}) => {
		const fetchedProducts = await getProducts(filter);
		setProducts(fetchedProducts);
	};

	return (
		<div className="container-fluid">
			<ShopDetailsCategories
				onSortChange={handleSelectChange}
				onCategoryChange={handleCategoryClick}
				activeItem={activeItem}
				setActiveItem={setActiveItem}
			/>

			<div className="row">
				{(!products.results || !products.results.length) && (
					<h1>Sorry, there are no products to show!</h1>
				)}
				{products.results &&
					products.results.map((product) => (
						<NormalProductCard
							key={product.id}
							product={product}
							handleAddProductToCart={handleAddProductToCart}
						/>
					))}

				{/* {!products && <h1>No Products matched your search term.</h1>} */}
			</div>
			{products.results && products.results.length !== 0 && (
				<ShopPagination
					pageCount={Math.ceil(products.count / 12)}
					onPageChange={handlePageClick}
				/>
			)}
		</div>
	);
};

export default ShopDetails;
