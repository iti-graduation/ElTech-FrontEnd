import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { cartCount } from "../../services/actions/cartSlice";
import { fetchUserCart } from "../../api/services/user/cart-services";
import { addOrder } from "../../api/services/user/order_services";

import { showToast } from "../../utils/toastUtil";
import { Link } from "react-router-dom";

import Billing from "../../components/Checkout/Billing";
import OrderOverview from "../../components/Checkout/OrderOverview";

const CheckoutSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [change, setChange] = useState(0);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const [subtotal, setSubtotal] = useState();
  const [discount, setDiscount] = useState(0);
  dispatch(cartCount(cart.length));
  const user = useSelector((state) => state.authSlice.user);

  useEffect(() => {
    if (user) {
      fetchUserCart()
        .then((data) => {
          setCart(data.products);
          setTotal(data.total_price);
          setSubtotal(data.default_total_price);
          if (data.coupon.discount) {
            setDiscount(Number(data.coupon.discount));
          }
        })
        .catch((err) => console.log(err));
    }
  }, [change]);

  const handleOrder = async () => {
    if (user) {
      try {
        const response = await fetch("http://localhost:8000/online-payment/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: total }),
        });

        if (response.ok) {
          const data = await response.json();
          const stripe = await loadStripe(
            "pk_test_51ODhd6B9sAFUoYRFQroYtxnJVUBnzMsvpWAgvFMXWstGdnpGX5KxJIAHiIhks6Klx0ddJiahh4kJvh0gh5KzF6IU00qDCI9sMo"
          );
          await addOrder();
          showToast("Your order placed successfuly", "success");

          // Use the received sessionId
          const { error } = await stripe.redirectToCheckout({
            sessionId: data.sessionId,
          });

          if (error) {
            console.error("Error redirecting to Stripe Checkout:", error);
            showToast("Failed to redirect to the payment gateway");
          }
        } else {
          console.error(
            "Failed to create Checkout Session:",
            response.statusText
          );
          showToast("Failed to initiate payment");
        }
      } catch (error) {
        console.error("Error creating Checkout Session:", error.message);
        showToast("Error creating payment");
      }
    } else {
      showToast("You need to log in to place an order!");
    }
  };

  return (
    <section className="checkout-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="customer-coupon">
              Have a Coupon ?{" "}
              <Link to="/cart">Click here to enter your code</Link>
            </div>
            <Billing />
          </div>
          <OrderOverview
            products={cart}
            total={total}
            subtotal={subtotal}
            discount={discount}
            handleOrder={handleOrder}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
