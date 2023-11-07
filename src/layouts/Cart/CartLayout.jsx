import CartTable from "../../components/Cart/CartTable";
import CartTotal from "../../components/Cart/CartTotal";
import DiscountCoupon from "../../components/Cart/DiscountCoupon";

const CartLayout = () => {
	return (
		<section className="cart-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form className="woocommerce-cart-form" action="#">
							<CartTable />
							<div className="row">
								<DiscountCoupon />
								<CartTotal />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartLayout;
