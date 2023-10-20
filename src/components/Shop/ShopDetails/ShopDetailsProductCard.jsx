import ProductCardBadge from "../../Shared/Badges/ProductCardBadge";

const ShopDetailsProductCard = ({
  badge,
  image,
  title,
  price,
  discountedPrice,
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="single-shop-product">
        <div className="sp-thumb">
          <img src={image} alt="" className="" />
          {badge != null && <ProductCardBadge badgeClass={badge} />}
        </div>
        <div className="sp-details">
          <h4>{title}</h4>
          <div className="product-price clearfix">
            <span className="price">
              {discountedPrice != null && <del>
                <span>
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  {price}
                </span>
              </del>}
              <ins><span><span class="woocommerce-Price-currencySymbol">$</span>
                {discountedPrice??price}
              </span></ins>
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

export default ShopDetailsProductCard;
