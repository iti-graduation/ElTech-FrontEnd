
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop';

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
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Suspense>
	  );
}
