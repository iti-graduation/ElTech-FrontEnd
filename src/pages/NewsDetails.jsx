import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import NewsDetailsLayout from "../layouts/News/NewsDetailsLayout";
import Footer from "../layouts/Home/Footer";

const NewsDetails = () => {
	return (
		<>
			<Preloader />
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="News Details" />
			<NewsDetailsLayout />
			<Footer />
		</>
	);
};

export default NewsDetails;
