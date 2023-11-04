import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "../layouts/Home/Preloader";


// import pages
// const PageName = React.lazy(() => import('path'));
const Home = React.lazy(() => import('../pages/Home'));
const Checkout = React.lazy(() => import('../pages/Checkout'));
const ProductDetails = React.lazy(() => import('../pages/ProductDetails'));
const Cart = React.lazy(() => import('../pages/Cart'));
const Shop = React.lazy(() => import('../pages/Shop'));
const Wishlist = React.lazy(() => import('../pages/Wishlist'));
const Orders = React.lazy(() => import('../pages/Orders'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const TermsAndConditions = React.lazy(() => import('../pages/PolicyPages/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('../pages/PolicyPages/PrivacyPolicy'));
const ReturnPolicy = React.lazy(() => import('../pages/PolicyPages/ReturnPolicy'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const News = React.lazy(() => import('../pages/News'));
const NewsDetails = React.lazy(() => import('../pages/NewsDetails'));

export default function Router() {
	return (
		<Suspense fallback={<Preloader />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/news" element={<News />} />
				<Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/return" element={<ReturnPolicy />} />
        <Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
