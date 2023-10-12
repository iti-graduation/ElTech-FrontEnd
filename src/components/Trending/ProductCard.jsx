import t1 from "./../../assets/images/home/t1.jpg";

export default function ProductCard() {
	return (
		<div className="single-trending-product">
			<div className="trend-thumb">
				<img src={t1} alt="" />
			</div>
			<div className="tr-pro-detail">
				<h3>
					<a href="single-product.html">TV Remove Controller</a>
					<div className="product-price clearfix">
						<span className="price">
							<span>
								<span className="woocommerce-Price-currencySymbol">
									$
								</span>
								112.00
							</span>
						</span>
					</div>
				</h3>
				<p>
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
					odit aut fugit, sed quia consequuntur magni dolores eos qui
					ratione voluptatem sequid.
				</p>
				<a className="tr-atc" href="#">
					Add To Cart
				</a>
			</div>
		</div>
	);
}
