import { Link } from "react-router-dom";

import productImg1 from "../../../assets/images/cart/1.jpg";

import ProductCardBadge from "../../../components/Shared/Badges/ProductCardBadge";
import ProductPrice from "../../Shared/NormalProductCard/ProductPrice";

const ProductRow = ({ product, handleDeleteProduct, handleUpdateProduct }) => {
	return (
		<tr className="cart-item">
			<td className="text-center">{product.id}</td>
			<td className="product-thumbnail-title text-center">
				{product && (
					<>
						<Link to={"/product/" + product.id}>
							<img
								src={
									product.thumbnail.image
										? product.thumbnail.image
										: productImg1
								}
								alt=""
							/>
						</Link>
						<Link
							className="product-name"
							to={"/product/" + product.id}
						>
							{product.name}
						</Link>
					</>
				)}
			</td>
			<td className="product-unit-price text-center">
				{/* <div className="product-price clearfix">
					<span className="price">
						<span>
							<span className="woocommerce-Price-currencySymbol">
								${product && product.price}
							</span>
						</span>
					</span>
				</div> */}
				<ProductPrice product={product} />
			</td>
			<td className="product-quantity clearfix text-center">
				{product.stock ? (
					product.stock
				) : (
					<span className="pro-badge2 out-of-stock">
						Out of Stock
					</span>
				)}
			</td>

			<td className="product-total text-center">
				<div className="product-price clearfix">
					<span className="price">
						<span>
							<span className="woocommerce-Price-currencySymbol">
								$
							</span>
							{product && product.price}
						</span>
					</span>
				</div>
			</td>
			<td className="text-center">
				<button className="goru-btn">Edit</button>
			</td>
			<td className="product-remove text-center">
				<Link></Link>
			</td>
		</tr>
	);
};

export default ProductRow;
