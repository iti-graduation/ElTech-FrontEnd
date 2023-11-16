import { Link } from "react-router-dom";

const ProductCartQty = ({ handleUpdateProductToCart, quantity, handleQuantity }) => {
  return (
    <div className="product-cart-qty">
      <div className="quantityd clearfix">
        <button
          type="button"
          className="qtyBtn btnMinus"
          onClick={() => handleQuantity()}
        >
          <span>-</span>
        </button>
        <input name="qty" value={quantity} title="Qty" className="input-text qty text carqty" type="text" />
        <button
          type="button"
          className="qtyBtn btnPlus"
          onClick={() => handleQuantity(true)}
        >
          +
        </button>
      </div>
      <Link
        className="add-to-cart-btn"
        onClick={() => handleUpdateProductToCart(quantity)}>Add To Cart
      </Link>
      <a href="#" className="Whislist"><i className="twi-heart"></i></a>
      <a href="#" className="compare"><i className="twi-random"></i></a>
    </div>
  );
};

export default ProductCartQty;
