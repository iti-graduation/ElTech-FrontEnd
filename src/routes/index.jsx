import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import Wishlist from "../pages/Wishlist";
import Preloader from "../layouts/Home/Preloader";
import News from "../pages/News";

// import pages
// const PageName = React.lazy(() => import('path'));

export default function Router() {
	return (
		<Suspense fallback={<Preloader />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/news" element={<News />} />
			</Routes>
		</Suspense>
	);
}
