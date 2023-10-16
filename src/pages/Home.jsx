import Clients from "../layouts/Home/Clients";
import Services from "../layouts/Home/Services";
import Slider from "../layouts/Home/Slider";
import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Trending from "../layouts/Home/Trending";
import Popular from "../layouts/Home/Popular";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <PopUpSearch />
      <Slider />
      <Services />
      <Trending />
      <Clients />
      <Popular />
    </>
  );
}
