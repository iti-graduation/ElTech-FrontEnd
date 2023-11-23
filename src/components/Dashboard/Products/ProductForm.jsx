import React, { useState, useEffect } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import {
	addProduct,
	getAllCategories,
	addProductImages,
} from "../../../api/services/user/product-services"; // Import your authentication context

import InputField from "../../Shared/InputField/InputField";

import { showToast } from "../../../utils/toastUtil";

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
	const [images, setImages] = useState([]);

	// const handleFileChange = (e) => {
	// 	setImages([...e.target.files]);
	// };

	const handleFileChange = (e) => {
		const files = Array.from(e.target.files);
		const validFiles = files.filter((file) =>
			file.type.startsWith("image/")
		);
		if (validFiles.length !== files.length) {
			showToast(
				"Some files were not images and were not uploaded",
				"error"
			);
		}
		setImages(validFiles);
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await addProduct(
	// 			name,
	// 			price,
	// 			isHot,
	// 			isOnSale,
	// 			saleAmount,
	// 			description,
	// 			stock,
	// 			isFeatured,
	// 			isTrending,
	// 			selectedCategory
	// 		);
	// 		console.log("Product added successfully:", response);
	// 		// Reset form fields after successful submission
	// 		setName("");
	// 		setPrice("");
	// 		setIsHot(false);
	// 		setIsOnSale(false);
	// 		setSaleAmount("");
	// 		setDescription("");
	// 		setStock("");
	// 		setIsFeatured(false);
	// 		setIsTrending(false);
	// 		setSelectedCategory("");
	// 	} catch (error) {
	// 		console.error("Error adding product:", error.message);
	// 	}
	// };

	// const handleCategoryChange = (e) => {
	// 	setSelectedCategory(e.target.value);
	// };

	const [productData, setProductData] = useState({
		name: "",
		price: 0,
		stock: 0,
		category: 0,
	});

	// const handleChange = (event) => {
	// 	console.log(event.target.name, event.target.value);
	// 	console.log(productData);
	// 	setProductData({
	// 		...productData,
	// 		[event.target.name]: event.target.value,
	// 	});
	// };

	// const handleChange = (event) => {
	// 	console.log("Before assignment", productData);
	// 	console.log(event.target.name, event.target.value);
	// 	console.log("after assignment", productData);
	// 	const value =
	// 		event.target.type === "checkbox"
	// 			? event.target.checked
	// 			: event.target.value;
	// 	setProductData({
	// 		...productData,
	// 		[event.target.name]: value,
	// 	});
	// };

	const handleChange = (event) => {
		const value =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;
		if (event.target.name === "category") {
			setProductData({
				...productData,
				[event.target.name]: parseInt(value, 10),
			});
		} else {
			setProductData({
				...productData,
				[event.target.name]: value,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { name, price, stock, category, isOnSale, sale_amount } =
			productData;

		// Validation
		if (!name || !price || !stock || !category) {
			showToast(
				"Please fill in all required fields: name, price, stock, category",
				"error"
			);
			return;
		}

		if (isNaN(price) || price <= 0) {
			showToast("Price must be a number bigger than 0", "error");
			return;
		}

		if (isNaN(stock) || stock < 0) {
			showToast("Stock must be a number at least 0", "error");
			return;
		}

		if (isOnSale) {
			if (isNaN(sale_amount) || sale_amount < 1 || sale_amount > 100) {
				showToast(
					"Sale amount must be a number between 1 and 100",
					"error"
				);
				return;
			}
		}

		try {
			const response = await addProduct(productData);
			console.log("Product added successfully:", response);
			console.log("Product Data", productData);
			await addProductImages(response.id, images);
			// Reset form fields after successful submission
			// setProductData({
			// 	name: "",
			// 	price: 0,
			// 	stock: 0,
			// 	category: 0,
			// });
			setProductData({
				name: "",
				price: 0,
				stock: 0,
				category: 0,
				is_on_sale: false,
				sale_amount: 0,
				is_hot: false,
				is_featured: false,
				is_trending: false,
			});
			setImages([]);
			showToast("Product added successfully", "success");
		} catch (error) {
			console.error("Error adding product:", error.message);
			showToast("Error adding product: " + error.message, "error");
		}
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
							onChange={handleChange}
							value={productData.name}
						/>
						{/* <InputField
							noOfCol="col-lg-6"
							fieldLabel="Price"
							fieldPlaceholder="Enter product price"
							fieldName="price"
							fieldType="number"
							onChange={handleChange}
						/> */}
						<p className="col-lg-6">
							<label>Price</label>
							<input
								placeholder="Enter product price"
								name="price"
								type="number"
								onChange={handleChange}
								step="0.01"
								value={productData.price}
							/>
						</p>
						<p className="col-lg-12">
							<label>Description</label>
							<textarea
								name="description"
								placeholder="Enter product description"
								rows="4"
								onChange={handleChange}
								value={productData.description}
							></textarea>
						</p>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Stock"
							fieldPlaceholder="Enter product stock"
							fieldName="stock"
							fieldType="number"
							onChange={handleChange}
							value={productData.stock}
						/>
						<p className="billing-countries col-lg-6">
							<label>Category</label>
							<select
								className="country_to_state country_select"
								id="billing_country"
								name="category"
								onChange={handleChange}
								value={productData.category}
							>
								<option value="0">---</option>
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
								onChange={handleChange}
								value={productData.is_on_sale}
							/>
						</p>
						{/* <InputField
							noOfCol="col-lg-6"
							fieldLabel="Sale Amount"
							fieldPlaceholder="Enter sale amount (1 - 100)"
							fieldName="sale_amount"
							fieldType="number"
							onChange={handleChange}
							disabled={!productData.is_on_sale}
						/> */}
						<p className="col-lg-6">
							<label>Sale Amount</label>
							<input
								placeholder="Enter sale amount (1 - 100)"
								name="sale_amount"
								type="number"
								onChange={handleChange}
								disabled={!productData.is_on_sale}
								value={productData.sale_amount}
								step="0.01"
							/>
						</p>
						<p className="col-lg-4 d-flex align-items-center">
							<label className="w-25">Hot</label>
							<input
								type="checkbox"
								name="is_hot"
								className="w-25"
								onChange={handleChange}
								value={productData.is_hot}
							/>
						</p>
						<p className="col-lg-4 d-flex align-items-center">
							<label className="w-50">Featured</label>
							<input
								type="checkbox"
								name="is_featured"
								className="w-25"
								onChange={handleChange}
								value={productData.is_featured}
							/>
						</p>
						<p className="col-lg-4 d-flex align-items-center">
							<label className="w-50">Trending</label>
							<input
								type="checkbox"
								name="is_trending"
								className="w-25"
								onChange={handleChange}
								value={productData.is_trending}
							/>
						</p>

						<p className="col-lg-12">
							<label>
								Note: The first image you select will be used as
								the thumbnail.
							</label>
							<label
								for="fileUpload"
								class="goru-btn w-50 text-center mx-auto"
							>
								Upload Images
							</label>
							<input
								type="file"
								id="fileUpload"
								name="images"
								className="d-none"
								multiple
								onChange={handleFileChange}
							/>
							{/* <label htmlFor="fileUpload" className="goru-btn">
								Choose Images
							</label>
							<input
								type="file"
								id="fileUpload"
								name="images"
								multiple
								onChange={handleFileChange}
								style={{ display: "none" }}
							/> */}
						</p>
						<div className="col-lg-12">
							<button
								type="submit"
								className="goru-btn auth-button d-block mx-auto"
							>
								Add Product
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProductForm;
