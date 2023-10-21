import React from 'react';

const ProductCartQty = () => {
  return (
    <div className="product-cart-qty">
      <div className="quantityd clearfix">
        <button className="qtyBtn btnMinus"><span>-</span></button>
        <input name="qty" value="1" title="Qty" className="input-text qty text carqty" type="text" />
        <button className="qtyBtn btnPlus">+</button>
      </div>
      <a href="#" className="add-to-cart-btn">Add To Cart</a>
      <a href="#" className="Whislist"><i className="twi-heart"></i></a>
      <a href="#" className="compare"><i className="twi-random"></i></a>
    </div>
  );
};

export default ProductCartQty;
