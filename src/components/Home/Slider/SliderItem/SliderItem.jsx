import SliderItemButton from "./SliderItemButton";
import SliderItemDescription from "./SliderItemDescription";
import SliderItemImage from "./SliderItemImage";
import SliderItemTitle from "./SliderItemTitle";

const SliderItem = ({ itemImage, itemTitle, itemDescription }) => {
  return (
    <li className="rev-slidebg">

      <SliderItemTitle title={itemTitle} />

      <SliderItemDescription description={itemDescription} />

      <SliderItemButton />

      <SliderItemImage image={itemImage} />
      
    </li>
  );
};

export default SliderItem;
