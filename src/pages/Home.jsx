import Clients from "../layouts/Home/Clients";
import Services from "../layouts/Home/Services";
import Slider from "../layouts/Home/Slider";
import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Trending from "../layouts/Home/Trending";
import CategorySection from "../layouts/Home/Categories";
import MailChimpSection from "../layouts/Home/MailChimp";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <PopUpSearch />
      <Slider />
      <CategorySection />
      <Services />
      <Trending />
      <Clients />
      <MailChimpSection />
    </>
  );
}
