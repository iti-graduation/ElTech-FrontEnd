import { Link } from "react-router-dom";

const CartTotal = () => {
	return (
		<div className="col-md-6">
			<div className="cart-totals">
				<h2>Cart Totals</h2>
				<table className="shop-table">
					<tbody>
						<tr className="cart-subtotal">
							<th>Sub Total</th>
							<td data-title="Subtotal">
								<span className="woocommerce-Price-amount amount">
									<span className="woocommerce-Price-currencySymbol">
										$
									</span>
									42.00
								</span>
							</td>
						</tr>
						<tr className="order-total">
							<th>Grand Total</th>
							<td data-title="Subtotal">
								<span className="woocommerce-Price-amount amount">
									<span className="woocommerce-Price-currencySymbol">
										$
									</span>
									48.00
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="wc-proceed-to-checkout">
					<Link href="#" className="checkout-button">
						Proceed to checkout
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
