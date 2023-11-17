import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import LoginSection from "../layouts/Login/LoginSection";
import Footer from "../layouts/Home/Footer";

const Login = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Forget Password" />
			<LoginSection />
			<Footer className="inner-footer" />
		</>
	);
};

export default Login;
