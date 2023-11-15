import { Link } from "react-router-dom";

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
					<Link to={`/product/${product.id}`}>{product.name}</Link>
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
				<p>{product.description}</p>
				<a className="tr-atc" href="#">
					Add To Cart
				</a>
			</div>
		</div>
	);
};

export default ProductCard;
