import t1 from "../../../assets/images/home/t1.jpg";

const ProductCard = ({ product }) => {
	return (
		<div className="single-trending-product">
			<div className="trend-thumb">
				<img
					src={product.thumbnail.image}
					alt=""
					style={{ maxWidth: "670px", maxHeight: "450px" }}
				/>
			</div>
			<div className="tr-pro-detail">
				<h3>
					<a href="single-product.html">{product.name}</a>
					<div className="product-price clearfix">
						<span className="price">
							<span>
								<span className="woocommerce-Price-currencySymbol">
									$
								</span>
								{product.price}
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
};

export default ProductCard;
