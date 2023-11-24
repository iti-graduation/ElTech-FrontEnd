import { useState } from "react";
import { updateOrderStatus } from "../../../api/services/admin/admin-services";

const OrderEditForm = ({ order, handleShowOrders }) => {
	const [status, setStatus] = useState(order.status);

	const handleUpdate = async (id) => {
		await updateOrderStatus(id, status);
		handleShowOrders()
	}

	return (
		<div className="woocommerce-billing-fields" id="dashboard-form-wrapper">
			<h5>Update order status</h5>
			<form className="dashboard-form mt-4">
				<div className="col-lg-12 col-md-12 billing-countries">
					<label>Status</label>
					<select
						className="country_to_state country_select"
						id="status"
						name="status"
						onChange={(e) => setStatus(e.target.value)}
						value={status}
					>
						<option value="pending">pending</option>
						<option value="shipped">shipped</option>
						<option value="delivered">delivered</option>
					</select>
				</div>
				<div className="col-lg-12 col-md-12">
					<button
						type="button"
						className="goru-btn auth-button d-block mx-auto"
						onClick={() => handleUpdate(order.id)}
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default OrderEditForm;
