import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Banner from "../layouts/Shared/Banner";
import Footer from "../layouts/Home/Footer";
import WishlistLayout from "../layouts/WishList/WishlistLayout";

 const Wishlist = () => {
	return (
		<>
			<Preloader />
			<Header className="inner-header" />
			<PopUpSearch />
			<Banner name="Wishlist" />
			<WishlistLayout />
			<Footer className="inner-footer"/>
		</>
	);
}

export default Wishlist;