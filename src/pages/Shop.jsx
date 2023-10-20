import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Footer from "../layouts/Home/Footer";
import ShopLayout from "../layouts/Shop/ShopLayout";

 const Shop = () => {
	return (
		<>
			<Preloader />
			<Header className="inner-header" />
			<PopUpSearch />
			<ShopLayout />
			<Footer className="inner-footer"/>
		</>
	);
}

export default Shop;