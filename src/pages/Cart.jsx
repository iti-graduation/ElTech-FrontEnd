import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Banner from "../layouts/Home/Banner";
import CartLayout from "../layouts/Home/CartLayout";
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
