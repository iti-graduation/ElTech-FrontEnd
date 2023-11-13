import { useEffect, useState } from "react";

import { getFeaturedProducts } from "../../api/services/user/product-services";

import Scroll from "../../assets/images/home/scroll.png";
import Layer1 from "../../assets/images/home/layer1.jpg";
import ScrollButton from "../../components/Home/Slider/ScrollButton";
import ItemCounter from "../../components/Home/Slider/ItemCounter";
import SliderItem from "../../components/Home/Slider/SliderItem/SliderItem";

const Slider = () => {
	const [products, setProducts] = useState();
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await getFeaturedProducts();
			console.log(data);
			setProducts(data);
			// setLoading(false);
		};

		fetchProducts();
	}, []);

	// if (loading) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<section className="slider-01">
			<ScrollButton
				ScrollImage={Scroll}
				content={"scroll to explore"}
				to={"#coupone"}
			/>
			<ItemCounter />

			<div className="rev_slider_wrapper">
				<div
					id="rev_slider_1"
					className="rev_slider fullwidthabanner"
					style={{ display: "none" }}
					data-version="5.4.1"
				>
					<ul>
						{products &&
							products.map((product) => {
								return (
									<SliderItem
										key={product.id}
										itemImage={product.thumbnail.image}
										itemTitle={product.name}
										itemDescription={
											"Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod tempor incididunt ut labore et dolo aliqua. Ut enim ad minim veniam."
										}
									/>
								);
							})}

						{/* <SliderItem
							itemImage={
								"http://127.0.0.1:8000/media/uploads/product/a8014845-3c80-43a0-a159-cdf1278d729b.jpg"
							}
							itemTitle={"Product 1"}
							itemDescription={
								"Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod tempor incididunt ut labore et dolo aliqua. Ut enim ad minim veniam."
							}
						/> */}

						{/* <SliderItem
itemImage={Layer1}
itemTitle={"The Device That Takes You Higher."}
itemDescription={
"Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod tempor incididunt ut labore et dolo aliqua. Ut enim ad minim veniam."
}
/> */}
						{/* <SliderItem
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
/> */}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Slider;
