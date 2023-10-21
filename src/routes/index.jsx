import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails';
import Cart from "../pages/Cart";
import Shop from '../pages/Shop';
import Wishlist from "../pages/Wishlist";

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
        <Route path="/product" element={<ProductDetails />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/wishlist" element={<Wishlist />} />
			</Routes>
		</Suspense>
	);
}
