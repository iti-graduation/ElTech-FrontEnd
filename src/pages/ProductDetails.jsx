import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import Footer from "../layouts/Home/Footer";
import ProductSection from "../layouts/ProductsDetails/ProductSection";

export default function ProductDetails() {
  return (
    <>
      <Header className="inner-header"/>
      <PopUpSearch />
      <PageBanner section="Shop" category="Gaming"/>
      <ProductSection />
      <Footer />
    </>
  );
}
