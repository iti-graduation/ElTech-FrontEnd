import React, { useState,useEffect } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { addProduct,getAllCategories } from "../../../api/services/user/product-services"; // Import your authentication context


const ProductForm = ({clickHandler}) => {
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
		selectedCategory,
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
		  <h5>Add new Product</h5>
		  <form onSubmit={handleSubmit} className="dashboard-form" id="dashboard-form">
			<div className="col-lg-12 col-md-12">
			  <input
				type="text"
				name="title"
				placeholder="Post Title"
				value={name}
				onChange={(e) => setName(e.target.value)}
			  />
			</div>

			<div className="col-lg-12 col-md-12" style={{display:"flex"}}>
				<label>
					Price:
					<input
					type="number"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					/>
				</label>
				<label>
					Sale Amount:
					<input
					type="number"
					value={saleAmount}
					onChange={(e) => setSaleAmount(e.target.value)}
					/>
				</label>
			</div>

			<div className="col-lg-12 col-md-12" style={{display:"flex"}}>
				<label>
					Is On Sale:
					<input
					type="checkbox"
					checked={isOnSale}
					onChange={(e) => setIsOnSale(e.target.checked)}
					/>
				</label>
				<label>
					Is Hot:
					<input
					type="checkbox"
					checked={isHot}
					onChange={(e) => setIsHot(e.target.checked)}
					/>
				</label>
			</div>

			<div className="col-lg-12 col-md-12" style={{display:"flex"}}>
				<label>
					Is Trending:
					<input
					type="checkbox"
					checked={isTrending}
					onChange={(e) => setIsTrending(e.target.checked)}
					/>
				</label>
				<label>
					Is Featured:
					<input
					type="checkbox"
					checked={isFeatured}
					onChange={(e) => setIsFeatured(e.target.checked)}
					/>
				</label>
			</div>

			<div className="col-lg-12 col-md-12" style={{display:"flex"}}>
				<label>
					Stock:
					<input
					type="number"
					value={stock}
					onChange={(e) => setStock(e.target.value)}
					/>
				</label>
				<select value={selectedCategory} onChange={handleCategoryChange}>
					<option value="">Select category</option>
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
				placeholder="Product Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			  ></textarea>
			</div>

			<div className="col-lg-12 col-md-12">
			  <input type="submit" name="submit" value="Submit" />
			</div>
		  </form>
		</div>
	  );
	};

export default ProductForm;
