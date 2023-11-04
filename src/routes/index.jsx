import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import Wishlist from "../pages/Wishlist";
import Preloader from "../layouts/Home/Preloader";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TermsAndConditions from "../pages/PolicyPages/TermsAndConditions";
import PrivacyPolicy from "../pages/PolicyPages/PrivacyPolicy";
import ReturnPolicy from "../pages/PolicyPages/ReturnPolicy";

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/return" element={<ReturnPolicy />} />
      </Routes>
    </Suspense>
  );
}
