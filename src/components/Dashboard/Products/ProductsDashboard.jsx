import ProductForm from "./ProductForm";
import ProductsTable from "./ProductsTable";
import React, { useState } from "react";

const ProductsDashboard = () => {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const handleCreateClick = () => {
		setShowCreateForm(!showCreateForm);
	};

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
			{showCreateForm && (
				<div className="reply-form-wrapper">
					<ProductForm clickHandler={handleCreateClick} />
				</div>
			)}
			{!showCreateForm && <ProductsTable />}
		</div>
	);
};

export default ProductsDashboard;
