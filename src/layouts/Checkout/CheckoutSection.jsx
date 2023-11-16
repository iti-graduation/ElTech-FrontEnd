import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { cartCount } from "../../services/actions/cartSlice"
import { fetchUserCart } from "../../api/services/user/cart-services";

import { showToast } from '../../utils/toastUtil';
import { Link } from "react-router-dom";

import React from "react";
import Billing from "../../components/Checkout/Billing";
import OrderOverview from "../../components/Checkout/OrderOverview";

const CheckoutSection = () => {
  const dispatch = useDispatch();
	const [change, setChange] = useState(0);
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState([]);
	dispatch(cartCount(cart.length));

  useEffect(() => {
		fetchUserCart()
			.then((data) => {
				setCart(data.products);
				setTotal(data.total_price);
			})
			.catch((err) => console.log(err));

	}, [change]);

  return (
    <section className="checkout-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="customer-coupon">
              Have a Coupon ? <Link to="/cart">Click here to enter your code</Link>
            </div>
            <Billing />
          </div>
          <OrderOverview 
            products = {cart}
            total = {total}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
