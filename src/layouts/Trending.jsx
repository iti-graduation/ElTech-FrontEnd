import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import ProductsRow from "../components/Trending/ProductsRow";

import shape2 from "./../assets/images/home/shape2.png";
import { useEffect } from "react";

export default function Trending() {
	useEffect(() => {
		// var trending_slider = $(".trending-slider");
		// trending_slider.owlCarousel({
		// 	loop: false,
		// 	margin: 0,
		// 	responsiveClass: true,
		// 	dots: false,
		// 	smartSpeed: 700,
		// 	animateIn: "slideInRight",
		// 	animateOut: "slideOutRight",
		// 	nav: true,
		// 	navText: [
		// 		'<i class="twi-long-arrow-alt-left1"></i>',
		// 		'<i class="twi-long-arrow-alt-right1"></i>',
		// 	],
		// 	items: 1,
		// });
	});

	return (
		<section
			className="trending-section"
			style={{
				backgroundImage: `url(${shape2})`,
			}}
		>
			<div className="sec-heading rotate-tb">
				Trending <span> Products</span>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="sec-title">Trending Products</h2>
						<p className="sec-desc">
							Sed ut perspiciatis unde omnis iste natus er
							<br /> sit voluptatem accusantium dolore.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<OwlCarousel
							className="trending-slider"
							loop={false}
							margin={0}
							responsiveClass={true}
							dots={false}
							smartSpeed={700}
							animateIn="slideInRight"
							animateOut="slideOutRight"
							nav={true}
							navText={[
								'<i class="twi-long-arrow-alt-left1"></i>',
								'<i class="twi-long-arrow-alt-right1"></i>',
							]}
							items={1}
						>
							{/* <div className="trending-slider owl-carousel"> */}
							<ProductsRow />
							<ProductsRow />
							{/* </div> */}
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	);
}
