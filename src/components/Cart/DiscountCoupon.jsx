const DiscountCoupon = () => {
	return (
		<div className="col-md-6">
			<div className="coupon">
				<h3>Coupon discount</h3>
				<p>
					Enter your code if you have one. Pellentesque habitant morbi
					tristique senectus et netus et malesuada fames ac turpis
					egestas.
				</p>
				<input
					type="text"
					name="coupon_code"
					placeholder="Enter Your code Here"
				/>
				<button type="submit" className="button" name="apply_coupon">
					Apply coupon
				</button>
			</div>
		</div>
	);
};

export default DiscountCoupon;
