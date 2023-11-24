import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { fetchUserOrder } from "../../../api/services/user/order_services";

import OrdersDetailsTable from "../../Orders/OrdersDetailsTable"

function OrderDetails({ orderID, handleShowOrders }) {
	const [order, setOrder] = useState([]);
	const user = useSelector((state) => state.authSlice.user);

	useEffect(() => {
		if (user) {
			fetchUserOrder(orderID)
				.then((data) => {
					setOrder(data);
				})
				.catch((err) => console.log(err));
		}
	}, [orderID]);

	return (
		<>
			<button
				className="guru-btn mb-5"
				id="create-btn"
				onClick={handleShowOrders}
			>
				Back
			</button>
			{order != 0 &&
				<OrdersDetailsTable order={order} />
			}
		</>
	)
}

export default OrderDetails
