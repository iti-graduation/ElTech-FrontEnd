import { Link } from "react-router-dom";

import productImg1 from "../../assets/images/cart/1.jpg";

const CartItem = ({ product }) => {
	return (
		<tr className="cart-item">
			<td className="product-thumbnail-title">
				<Link to="#">
					<img src={productImg1} alt="" />
				</Link>
				<Link className="product-name" to="#">
					{product.name}
				</Link>
			</td>
			<td className="product-unit-price">
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
			</td>
			<td className="product-quantity clearfix">
				<div className="quantityd clearfix">
					<button className="qtyBtn btnMinus">
						<span>-</span>
					</button>
					<input
						name="qty"
						value="1"
						title="Qty"
						className="input-text qty text carqty"
						type="text"
					/>
					<button className="qtyBtn btnPlus">+</button>
				</div>
			</td>
			<td className="product-total">
				<div className="product-price clearfix">
					<span className="price">
						<span>
							<span className="woocommerce-Price-currencySymbol">
								$
							</span>
							42.00
						</span>
					</span>
				</div>
			</td>
			<td className="product-remove">
				<Link to="#"></Link>
			</td>
		</tr>
	);
};

export default CartItem;
