import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// import pages
// const PageName = React.lazy(() => import('path'));

export default function Router() {
    return (
        <Suspense fallback={
            // add loading element
            <></>
        }>
            <Routes>
                {/*
                <Route path="/" element={<pageName />} />
                */}
            </Routes>
        </Suspense>
    )
}