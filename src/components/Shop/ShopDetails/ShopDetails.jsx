import { useLocation } from "react-router-dom";

import ShopDetailsCategories from "./ShopDetailsCategories";
import shopImageHolder370x460 from "../../../assets/images/shop/holder370x460.jpg";
import NormalProductCard from "../../Shared/NormalProductCard/NormalProductCard";

const ShopDetails = () => {
	const location = useLocation();
	const products = location.state?.products;

	// const products = [
	// 	{
	// 		id: 1,
	// 		image: shopImageHolder370x460,
	// 		badge: "sale",
	// 		title: "Gaming Headset",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 2,
	// 		image: shopImageHolder370x460,
	// 		badge: "hot",
	// 		title: "VRBOX Gaming",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 3,
	// 		image: shopImageHolder370x460,
	// 		badge: null,
	// 		title: "Gaming Mouse",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 4,
	// 		image: shopImageHolder370x460,
	// 		badge: null,
	// 		title: "Gaming Controller",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 5,
	// 		image: shopImageHolder370x460,
	// 		badge: "sale",
	// 		title: "Gaming Headset",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 6,
	// 		image: shopImageHolder370x460,
	// 		badge: "hot",
	// 		title: "Wireless Headset",
	// 		price: "122.00",
	// 		discountedPrice: null,
	// 	},
	// 	{
	// 		id: 7,
	// 		image: shopImageHolder370x460,
	// 		badge: null,
	// 		title: "Gaming Controller",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 8,
	// 		image: shopImageHolder370x460,
	// 		badge: "sale",
	// 		title: "LED TV",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 9,
	// 		image: shopImageHolder370x460,
	// 		badge: "hot",
	// 		title: "Wirless Headset",
	// 		price: "122.00",
	// 		discountedPrice: null,
	// 	},
	// 	{
	// 		id: 10,
	// 		image: shopImageHolder370x460,
	// 		badge: null,
	// 		title: "Black Drone",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 11,
	// 		image: shopImageHolder370x460,
	// 		badge: null,
	// 		title: "Bluetooth Earphones",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// 	{
	// 		id: 12,
	// 		image: shopImageHolder370x460,
	// 		badge: "sale",
	// 		title: "LED TV",
	// 		price: "42.00",
	// 		discountedPrice: "38.00",
	// 	},
	// ];

	return (
		<div className="container-fluid">
			<ShopDetailsCategories />

			<div className="row">
				{products &&
					products.map((product) => (
						<NormalProductCard key={product.id} product={product} />
					))}

				{!products && <h1>No Products matched your search term.</h1>}
			</div>
		</div>
	);
};

export default ShopDetails;
