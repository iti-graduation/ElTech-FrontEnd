import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../layouts/ProductsDetails/PageBanner";
import Footer from "../layouts/Home/Footer";
import ProductSection from "../layouts/ProductsDetails/ProductSection";

export default function ProductDetails() {
  return (
    <>
      <Preloader />
      <Header />
      <PopUpSearch />
      <PageBanner />
      <ProductSection />
      <Footer />
    </>
  );
}
