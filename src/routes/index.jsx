import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from '../pages/Shop';
import Whishlist from "../pages/Whishlist";

// import pages
// const PageName = React.lazy(() => import('path'));

export default function Router() {
	return (
		<Suspense
			fallback={
				// add loading element
				<></>
			}
		>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/whishlist" element={<Whishlist />} />
			</Routes>
		</Suspense>
	);
}
