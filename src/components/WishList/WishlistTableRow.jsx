import { Link } from "react-router-dom";
import img3 from "../../assets/images/cart/3.jpg";

function WhishlistTableRow() {
    return (
        <tr className="wishlist-item">
            <td className="product-thumbnail-title">
                <Link  to="#">
                    <img src={img3} alt="" />
                </Link>
                <Link className="product-name"to="#">
                    Gaming Controller
                </Link>
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

export default WhishlistTableRow
