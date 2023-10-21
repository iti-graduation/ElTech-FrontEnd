import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";

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
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  );
}
