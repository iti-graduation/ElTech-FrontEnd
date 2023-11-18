import React from "react";
import CartItem from "./CartItem";
import CartSubtotal from "./CartSubtotal";
import PaymentMethod from "./PaymentMethod";

const OrderOverview = ({
  products,
  total,
  subtotal,
  discount,
  handleOrder,
}) => {
  return (
    <div className="col-md-6">
      <div className="woocommerce-checkout-review-order" id="order_review">
        <h3>Your Order</h3>
        <table className="check-table woocommerce-checkout-review-order-table">
          <thead>
            <tr>
              <th className="product-name">Products</th>
              <th className="product-total"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <CartItem key={product.id} product={product} />;
            })}
          </tbody>
          <tfoot>
            <CartSubtotal
              subtotalClass="cart-subtotal"
              subtotalName="Subtotal"
              subtotalPrice={subtotal}
            />
            <tr className="cart-subtota">
              <th>Discount</th>
              <td>
                <div className="product-price clearfix">
                  <span className="price">
                    <span>{discount + " %"}</span>
                  </span>
                </div>
              </td>
            </tr>
            <CartSubtotal
              subtotalClass="order-total"
              subtotalName="Total"
              subtotalPrice={total}
            />
          </tfoot>
        </table>
        <div className="woocommerce-checkout-payment" id="payment">
          <ul className="wc_payment_methods payment_methods methods">
            <PaymentMethod
              paymentMethodClass="payment_method_bacs"
              paymentMethodValue="bacs"
              paymentMethodId="payment_method_bacs"
              paymentMethodLabel="Direct bank transfer"
              paymentMethodDescription="Aenean id ullamcorper libero. Vestibulum impnibh. Lorem
              ullamcorper volutpat. Vestibulum lacinia risus. Etiam sagittis
              ullamcorper volutpat."
            />
            <PaymentMethod
              paymentMethodClass="payment_method_cod"
              paymentMethodValue="cod"
              paymentMethodId="payment_method_cod"
              paymentMethodLabel="Cheque Payment"
              paymentMethodDescription="Exam id ullamcorper libero. Vestibulum impnibh. Lorem
              ullamcorper volutpat. Vestibulum lacinia risus. Etiam sagittis
              ullamcorper volutpat."
            />
            <PaymentMethod
              paymentMethodClass="payment_method_paypal"
              paymentMethodValue="paypal"
              paymentMethodId="payment_method_paypal"
              paymentMethodLabel={
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      'PayPal <i class="twi-cc-mastercard"></i> ' +
                      '<i class="twi-cc-visa"></i> ' +
                      '<i class="twi-cc-paypal"></i> ' +
                      '<i class="twi-cc-discover"></i>',
                  }}
                />
              }
              paymentMethodDescription="Vestibulum impnibh. Lorem ullamcorper volutpat. Vestibulum lacinia risus. Etiam sagittis ullamcorper volutpat."
            />
          </ul>
        </div>
        <div className="place-order">
          <button
            type="button"
            className="button"
            onClick={() => handleOrder()}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;
