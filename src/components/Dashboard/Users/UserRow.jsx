import { Link } from "react-router-dom";

import { deleteOrRestoreProduct } from "../../../api/services/user/product-services";

// import productImg1 from "../../../assets/images/cart/1.jpg";

import profilePic from "../../../assets/images/user/profile_pic_placeholder.png";

import ProductCardBadge from "../../../components/Shared/Badges/ProductCardBadge";
import ProductPrice from "../../Shared/NormalProductCard/ProductPrice";

import { showToast } from "../../../utils/toastUtil";

const UserRow = ({ user }) => {
	const handleProductDeletion = async (is_deleted) => {
		try {
			// await deleteOrRestoreProduct(product.id, is_deleted);

			if (is_deleted)
				showToast("Product deleted successfully", "success");
			else showToast("Product restored successfully", "success");

			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (error) {
			showToast(
				"Error deleting or restoring product: " + error.message,
				"error"
			);
		}
	};

	return (
		<tr className="cart-item">
			<td className="text-center">{user.id}</td>
			<td className="product-thumbnail-title text-center">
				<Link to={"/dashboard/users/" + user.id}>
					<img
						src={
							user.profile_picture
								? user.thumbnail.image
								: profilePic
						}
						alt=""
						style={{ height: "auto" }}
					/>
				</Link>
				<Link className="ml-2" to={"/dashboard/users/" + user.id}>
					{user.email}
				</Link>
			</td>
			<td className="product-unit-price text-center">
				{user.first_name} {user.last_name}
			</td>
			<td className="product-quantity clearfix text-center">
				{user.mobile_phone}
			</td>

			{/* <td className="product-total text-center">
				<div className="product-price clearfix">
					<span className="price">
						<span>
							<span className="woocommerce-Price-currencySymbol">
								$
							</span>
							{product && product.price}
						</span>
					</span>
				</div>
			</td> */}
			<td className="text-center">
				<Link to={"/dashboard/users/" + user.id} className="goru-btn">
					Edit
				</Link>
			</td>
			{/* {!product.is_deleted ? (
				<td className="product-remove text-center">
					<Link onClick={() => handleProductDeletion(true)}></Link>
				</td>
			) : (
				<td className="text-center">
					<Link
						className="goru-btn"
						onClick={() => handleProductDeletion(false)}
					>
						Restore
					</Link>
				</td>
			)} */}
			<td className="product-remove text-center">
				<Link onClick={handleProductDeletion}></Link>
			</td>
		</tr>
	);
};

export default UserRow;
