import React from 'react'
import img3 from "../../assets/images/cart/3.jpg";

function WhishlistTableRaw() {
    return (
        <tr className="wishlist-item">
            <td className="product-thumbnail-title">
                <a href="#">
                    <img src={img3} alt="" />
                </a>
                <a className="product-name" href="#">
                    Gaming Controller
                </a>
            </td>

            <td className="product-unit-price">
                <div className="product-price clearfix">
                    <span className="price">
                        <span>
                            <span className="woocommerce-Price-currencySymbol">
                                $
                            </span>
                            42.00
                        </span>
                    </span>
                </div>
            </td>

            <td className="product-availity clearfix">
                <a href="#">In Stock</a>
            </td>

            <td className="add-to-cart">
                <a href="#">Add To Cart</a>
            </td>

            <td className="product-remove">
                <a href="#" />
            </td>
        </tr>
    )
}

export default WhishlistTableRaw
