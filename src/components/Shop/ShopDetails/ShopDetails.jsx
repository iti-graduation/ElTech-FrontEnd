import ShopDetailsCategories from "./ShopDetailsCategories";
import ShopDetailsProductCard from "./ShopDetailsProductCard";

import shopImageHolder370x460 from "../../../assets/images/shop/holder370x460.jpg";

const ShopDetails = () => {
  const products = [
    {
      image: shopImageHolder370x460,
      badge: "sale",
      title: "Gaming Headset",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: "hot",
      title: "VRBOX Gaming",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: null,
      title: "Gaming Mouse",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: null,
      title: "Gaming Controller",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: "sale",
      title: "Gaming Headset",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: "hot",
      title: "Wireless Headset",
      price: "122.00",
      discountedPrice: null,
    },
    {
      image: shopImageHolder370x460,
      badge: null,
      title: "Gaming Controller",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: "sale",
      title: "LED TV",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: "hot",
      title: "Wirless Headset",
      price: "122.00",
      discountedPrice: null,
    },
    {
      image: shopImageHolder370x460,
      badge: null,
      title: "Black Drone",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: null,
      title: "Bluetooth Earphones",
      price: "42.00",
      discountedPrice: "38.00",
    },
    {
      image: shopImageHolder370x460,
      badge: "sale",
      title: "LED TV",
      price: "42.00",
      discountedPrice: "38.00",
    },
  ];

  return (
    <div className="container-fluid">
      <ShopDetailsCategories />

      <div className="row">
        {products.map((product, index) => (
          <ShopDetailsProductCard
            key={index}
            image={product.image}
            badge={product.badge}
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopDetails;
