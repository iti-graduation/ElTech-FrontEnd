import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProductsBySearch } from "../../api/services/user/product-services";

const PopUpSearch = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const products = await getProductsBySearch(searchTerm);

			// Pass the products to the shop page.
			navigate("/shop", { state: { products } });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className="popup-search-sec">
			<div className="popup-search-overlay"></div>
			<div className="overlay-popup">
				<a href="javascript:void(0);" className="search-closer">
					x
				</a>
				<div className="middle-search">
					<div className="popup-search-form">
						<form onSubmit={handleSubmit}>
							<input
								type="search"
								value={searchTerm}
								onChange={(event) =>
									setSearchTerm(event.target.value)
								}
								placeholder="Search..."
							/>
							<button type="submit">
								<i className="twi-search"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PopUpSearch;
