import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Banner from "../layouts/Shared/Banner";
import Footer from "../layouts/Home/Footer";
import WhishlistLayout from "../layouts/WhishList/WhishlistLayout";

 const Whishlist = () => {
	return (
		<>
			<Preloader />
			<Header className="inner-header" />
			<PopUpSearch />
			<Banner name="Whish" />
			<WhishlistLayout />
			<Footer className="inner-footer"/>
		</>
	);
}

export default Whishlist;