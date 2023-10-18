import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Banner from "../layouts/Shared/Banner";
import CartLayout from "../layouts/Cart/CartLayout";
import Footer from "../layouts/Home/Footer";

export default function Cart() {
	return (
		<>
			<Preloader />
			<Header className="inner-header" />
			<PopUpSearch />
			<Banner name="Cart" />
			<CartLayout />
			<Footer />
		</>
	);
}
