import ProductsRow from "../components/Trending/ProductsRow";

import shape2 from "./../assets/images/home/shape2.png";

export default function Trending() {
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
						<div className="trending-slider owl-carousel">
							<ProductsRow />
							<ProductsRow />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
