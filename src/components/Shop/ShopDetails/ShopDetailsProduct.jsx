
const ShopDetailsProduct = ({
    title,
    image,
    

}) => {
    return (
        <div className="col-lg-3 col-md-6">
        <div className="single-shop-product">
          <div className="sp-thumb">
            <img src={shopImageHolder370x460} alt="" className="" />
            <div className="pro-badge">
              <p className="sale">Sale</p>
            </div>
          </div>
          <div className="sp-details">
            <h4>Gaming Headset</h4>
            <div className="product-price clearfix">
              <span className="price">
                <del>
                  <span>
                    <span className="woocommerce-Price-currencySymbol">
                      $
                    </span>
                    42.00
                  </span>
                </del>
                <ins>
                  <span>
                    <span className="woocommerce-Price-currencySymbol">
                      $
                    </span>
                    38.00
                  </span>
                </ins>
              </span>
            </div>
            <div className="sp-details-hover">
              <a className="sp-cart" href="#">
                <i className="twi-cart-plus"></i>
                <span>Add to cart</span>
              </a>
              <a className="sp-wishlist" href="#">
                <i className="twi-heart2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ShopDetailsProduct;
