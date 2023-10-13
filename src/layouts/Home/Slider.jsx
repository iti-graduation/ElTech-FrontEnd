import Scroll from "../../assets/images/home/scroll.png";
import Layer1 from "../../assets/images/home/layer1.jpg";
import ScrollButton from "../../components/Home/Slider/ScrollButton";
import ItemCounter from "../../components/Home/Slider/ItemCounter";
import SliderItem from "../../components/Home/Slider/SliderItem/SliderItem";

const Slider = () => {

  return (
    <section className="slider-01">
      <ScrollButton ScrollImage={Scroll} />

      <ItemCounter />

      <div className="rev_slider_wrapper">
        <div
          id="rev_slider_1"
          className="rev_slider fullwidthabanner"
          style={{ display: "none" }}
          data-version="5.4.1"
        >
          <ul>
            <SliderItem
              itemImage={Layer1}
              itemTitle={"The Device That Takes You Higher."}
              itemDescription={
                "Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod tempor incididunt ut labore et dolo aliqua. Ut enim ad minim veniam."
              }
            />

            <SliderItem
              itemImage={Layer1}
              itemTitle={"The Device That Takes You Higher."}
              itemDescription={
                "Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod tempor incididunt ut labore et dolo aliqua. Ut enim ad minim veniam."
              }
            />

            <SliderItem
              itemImage={Layer1}
              itemTitle={"The Device That Takes You Higher."}
              itemDescription={
                "Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod tempor incididunt ut labore et dolo aliqua. Ut enim ad minim veniam."
              }
            />

            <SliderItem
              itemImage={Layer1}
              itemTitle={"The Device That Takes You Higher."}
              itemDescription={
                "Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod tempor incididunt ut labore et dolo aliqua. Ut enim ad minim veniam."
              }
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slider;
