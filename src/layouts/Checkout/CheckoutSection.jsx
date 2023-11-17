import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { cartCount } from "../../services/actions/cartSlice"
import { fetchUserCart } from "../../api/services/user/cart-services";
import { addOrder } from "../../api/services/user/order_services"

import { showToast } from '../../utils/toastUtil';
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

  const handelOrder = async () => {
    if (user) {
      try {
        await addOrder()
        showToast('Your order placed successfuly', 'success');
        navigate('/orders')
      } catch (error) {
        showToast(error.toString())
      }
    }
    else {
      showToast('You need Login to place an order !');
    }
  }

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
            products={cart}
            total={total}
            subtotal={subtotal}
            discount={discount}
            handelOrder={handelOrder}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
