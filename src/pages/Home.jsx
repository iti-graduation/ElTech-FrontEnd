import Preloader from "../layouts/Preloader";
import Header from "../layouts/Header";
import PopUpSearch from "../layouts/PopUpSearch";
import Trending from "../layouts/Trending";

export default function Home() {
	return (
		<>
			<Preloader />
			<Header />
			<PopUpSearch />
			<Trending />
		</>
	);
}
