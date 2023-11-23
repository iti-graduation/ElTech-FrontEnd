import ProductForm from "./ProductForm";
import ProductsTable from "./ProductsTable";
import ProductEditForm from "./ProductEditForm";
import React, { useState } from "react";

const ProductsDashboard = () => {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [showUpdateForm, setShowUpdateForm] = useState(false);
	const [product, setProduct] = useState({});

	const handleCreateClick = () => {
		setShowCreateForm(!showCreateForm);
	};

	// const handleUpdateClick = (product) => {
	// 	setShowUpdateForm(!showUpdateForm);
	// 	setProduct(product);
	// };

	return (
		<div>
			<h1>Products</h1>
			<button
				className="guru-btn mb-5"
				id="create-btn"
				onClick={handleCreateClick}
			>
				{!showCreateForm ? "Add Product" : "All Products"}
			</button>
			{showCreateForm ? (
				<div className="reply-form-wrapper">
					<ProductForm clickHandler={handleCreateClick} />
				</div>
			) : (
				<ProductsTable />
			)}
			{/* {!showCreateForm && !showUpdateForm && (
				<ProductsTable updateHandler={handleUpdateClick} />
			)} */}
			{/* {!showCreateForm && } */}
			{/* {!showCreateForm && showUpdateForm && (
				<div className="reply-form-wrapper">
					<ProductEditForm
						clickHandler={handleCreateClick}
						product={product}
					/>
				</div>
			)} */}
		</div>
	);
};

export default ProductsDashboard;
