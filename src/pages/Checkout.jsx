import React from "react";
import Footer from "../layouts/Home/Footer";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Preloader from "../layouts/Home/Preloader";
import Banner from "../layouts/Checkout/Banner";
import CheckoutSection from "../layouts/Checkout/CheckoutSection";

const Checkout = () => {
  return (
    <>
      <Preloader />
      <Header innerHeaderClass={"inner-header"} />
      <PopUpSearch />
      <Banner />
      <CheckoutSection />
      <Footer />
    </>
  );
};

export default Checkout;
