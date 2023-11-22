import React, { useState, useEffect } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import {
	addProduct,
	getAllCategories,
} from "../../../api/services/user/product-services"; // Import your authentication context

import InputField from "../../Shared/InputField/InputField";

const ProductForm = ({ clickHandler }) => {
	const userData = getUserData();
	const userEmail = userData.email;
	const [categories, setCategories] = useState([]);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [isHot, setIsHot] = useState(false);
	const [isOnSale, setIsOnSale] = useState(false);
	const [saleAmount, setSaleAmount] = useState("");
	const [description, setDescription] = useState("");
	const [stock, setStock] = useState("");
	const [isFeatured, setIsFeatured] = useState(false);
	const [isTrending, setIsTrending] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await addProduct(
				name,
				price,
				isHot,
				isOnSale,
				saleAmount,
				description,
				stock,
				isFeatured,
				isTrending,
				selectedCategory
			);
			console.log("Product added successfully:", response);
			// Reset form fields after successful submission
			setName("");
			setPrice("");
			setIsHot(false);
			setIsOnSale(false);
			setSaleAmount("");
			setDescription("");
			setStock("");
			setIsFeatured(false);
			setIsTrending(false);
			setSelectedCategory("");
		} catch (error) {
			console.error("Error adding product:", error.message);
		}
	};

	const handleCategoryChange = (e) => {
		setSelectedCategory(e.target.value);
	};

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			setCategories(data);
		};

		fetchCategories();
	}, []);

	return (
		<div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
			{/* <h5>Add new Product</h5> */}
			{/* <form
				onSubmit={handleSubmit}
				className="dashboard-form"
				id="dashboard-form"
			>
				<div className="col-lg-12 col-md-12">
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div
					className="col-lg-12 col-md-12"
					style={{ display: "flex" }}
				>
					<label>
						Price
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</label>
					<label>
						Sale Amount
						<input
							type="number"
							value={saleAmount}
							onChange={(e) => setSaleAmount(e.target.value)}
						/>
					</label>
				</div>

				<div
					className="col-lg-12 col-md-12"
					style={{ display: "flex" }}
				>
					<label>
						Is On Sale
						<input
							type="checkbox"
							checked={isOnSale}
							onChange={(e) => setIsOnSale(e.target.checked)}
						/>
					</label>
					<label>
						Is Hot
						<input
							type="checkbox"
							checked={isHot}
							onChange={(e) => setIsHot(e.target.checked)}
						/>
					</label>
				</div>

				<div
					className="col-lg-12 col-md-12"
					style={{ display: "flex" }}
				>
					<label>
						Is Trending
						<input
							type="checkbox"
							checked={isTrending}
							onChange={(e) => setIsTrending(e.target.checked)}
						/>
					</label>
					<label>
						Is Featured
						<input
							type="checkbox"
							checked={isFeatured}
							onChange={(e) => setIsFeatured(e.target.checked)}
						/>
					</label>
				</div>

				<div
					className="col-lg-12 col-md-12"
					style={{ display: "flex" }}
				>
					<label>
						Stock
						<input
							type="number"
							value={stock}
							onChange={(e) => setStock(e.target.value)}
						/>
					</label>
					<select
						value={selectedCategory}
						onChange={handleCategoryChange}
					>
						<option value="">Category</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>

				<div className="col-lg-12 col-md-12">
					<textarea
						name="Description"
						placeholder="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>

				<div className="col-lg-12 col-md-12 text-center">
					<button className="goru-btn d-block mx-auto" type="submit">
						Submit
					</button>
				</div>

				<div className="col-lg-12 col-md-12">
					<input type="submit" name="submit" value="Submit" />
				</div>
			</form> */}
			<div className="woocommerce-billing-fields">
				<h3 className="text-center">Add New Product</h3>

				<form
					onSubmit={handleSubmit}
					method="post"
					className="d-flex justify-content-center "
				>
					<div className="row m-3 w-50 ">
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Title"
							fieldPlaceholder="Enter product title"
							fieldName="name"
							fieldType="text"
							// onChange={handleChange}
							// value={formData.first_name}
						/>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Price"
							fieldPlaceholder="Enter product price"
							fieldName="price"
							fieldType="number"
							// onChange={handleChange}
							// value={formData.last_name}
						/>
						<p className="col-lg-12">
							<label>Description</label>
							<textarea
								name="description"
								placeholder="Enter product description"
								rows="4"
							></textarea>
						</p>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Stock"
							fieldPlaceholder="Enter product stock"
							fieldName="stock"
							fieldType="number"
							// onChange={handleChange}
							// value={formData.last_name}
						/>
						<p className="billing-countries col-lg-6">
							<label>Category</label>
							<select
								className="country_to_state country_select"
								id="billing_country"
								name="category"
								// onChange={fieldOnChange}
								// value={fieldValue}
							>
								{categories.map((category) => (
									<option
										key={category.id}
										value={category.id}
									>
										{category.name}
									</option>
								))}
							</select>
						</p>
						<p className="col-lg-6 d-flex align-items-center">
							<label className="w-25">On Sale</label>
							<input
								type="checkbox"
								name="is_on_sale"
								className="w-25"
							/>
						</p>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Sale Amount"
							fieldPlaceholder="Enter sale amount (1 - 100)"
							fieldName="sale_amount"
							fieldType="number"
							// onChange={handleChange}
							// value={formData.last_name}
						/>
						<p className="col-lg-4 d-flex align-items-center">
							<label className="w-25">Hot</label>
							<input
								type="checkbox"
								name="is_hot"
								className="w-25"
							/>
						</p>
						<p className="col-lg-4 d-flex align-items-center">
							<label className="w-50">Featured</label>
							<input
								type="checkbox"
								name="is_featured"
								className="w-25"
							/>
						</p>
						<p className="col-lg-4 d-flex align-items-center">
							<label className="w-50">Trending</label>
							<input
								type="checkbox"
								name="is_trending"
								className="w-25"
							/>
						</p>

						<button
							type="submit"
							className="goru-btn auth-button mx-auto col-lg-6"
						>
							Add Product
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProductForm;
