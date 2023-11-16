import { Link } from "react-router-dom";

import t1 from "../../../assets/images/home/t1.jpg";

import ProductPrice from "../../Shared/NormalProductCard/ProductPrice";
import ProductCardBadge from "../../Shared/Badges/ProductCardBadge";

const ProductCard = ({ product, handleAddProductToCart }) => {
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
					{/* <Link to={`/product/${product.id}`}>{product.name}</Link> */}
					<Link to={`/product/${product.id}`}>
						{product.name.length > 25
							? product.name.substring(0, 25) + "..."
							: product.name}
					</Link>
					<div className="product-price clearfix">
						<span className="price">
							<span>
								{/* <span className="woocommerce-Price-currencySymbol">
									$
								</span> */}
								{/* {product.price} */}
								<ProductPrice product={product} />
							</span>
						</span>
					</div>
				</h3>
				<p>
					{product.description.length > 60
						? product.description.substring(0, 60) + "..."
						: product.description}
				</p>
				{product.stock === 0 ? (
					<span className="pro-badge2 out-of-stock">
						Out of Stock
					</span>
				) : (
					<Link
						className="tr-atc"
						onClick={() => handleAddProductToCart(product.id)}
					>
						Add To Cart
					</Link>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
