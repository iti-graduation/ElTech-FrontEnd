import { useState,useEffect  } from "react";
import { updateLatestWeekly } from "../../../api/services/user/product-services";

const WeeklyEditForm = ({ weeklyDeal, handleShowOrders,handleDetailsTable }) => {
	const [dealTime , setDealTime]=useState("");
	const [productId , setProductId]=useState("");
	const [isFormValid, setIsFormValid] = useState(false);


	useEffect(() => {
		setIsFormValid(dealTime && productId);
	  }, [dealTime, productId]);

	const handleUpdate = async (id) => {
		await updateLatestWeekly(id, dealTime,productId);
		handleShowOrders()
	}

	return (
		<>
		<button
			className="guru-btn mb-5"
			id="create-btn"
			onClick={handleShowOrders}
			style={{marginRight:"10px"}}
		>
			Back
		</button>
		{/* <button
		className="guru-btn mb-5"
		id="create-btn"
		onClick={()=>handleDetailsTable(weeklyDeal)}
		>
		Product Details
		</button> */}
		<div className="woocommerce-billing-fields" id="dashboard-form-wrapper">
			<h3 className="text-center">UPDATE WEEKLY DEAL</h3>

			<form className="d-flex justify-content-center">
				<div className="row m-3 w-50 ">

				<div className="col-lg-12 col-md-12 billing-countries">
					<label>Deal Time</label>
					<input
						type="date"
						id="dealTime"
						name="dealTime"
						placeholder={weeklyDeal.deal_time}
						onChange={(e) => setDealTime(e.target.value)}
						required="true"
						/>
				</div>

				<div className="col-lg-12 col-md-12 billing-countries">
				<label>Product ID</label>					
				<input
						type="number"
						id="productId"
						name="productId"
						placeholder={weeklyDeal.product.id}
						value={productId}
						onChange={(e) => setProductId(e.target.value)}
						required="true"
					  />
				</div>
				<div className="col-lg-12 col-md-12">
					<button
						type="button"
						className="goru-btn auth-button d-block mx-auto"
						onClick={() => handleUpdate(weeklyDeal.id)}
						disabled={!isFormValid}
					>
						Update
					</button>
				</div>

				</div>
			</form>
		</div>
		</>
	);
};

export default WeeklyEditForm;
