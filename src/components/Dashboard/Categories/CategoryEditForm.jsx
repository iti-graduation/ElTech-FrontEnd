import React, { useState } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { updateCategory } from "../../../api/services/user/product-services"; // Import your authentication context




const CategoryEditForm = ({category , onCancel}) => {
	const [catName, setName] = useState('');
	const [image, setImage] = useState('');
	
  	
	  const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {

			const updatedData = {
				name: catName,
				image: image,
			  };

		  const response = await updateCategory(category.id, catName,image); // Assuming post.id exists
		  console.log('Post updated successfully:', response);
	
		  // Clear form fields after successful update
		  setName('');
		  setImage('');
	
		  // Hide the form after successful update
		  onCancel();
		} catch (error) {
		  console.error('Error updating post:', error.message);
		}
	  };
	

	return (
		<div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
		  <h5>Edit Category With Name : {category.name} </h5>
		  <form onSubmit={handleSubmit} className="dashboard-form" id="dashboard-form">
			<div className="col-lg-12 col-md-12">
			  <input
				type="text"
				name="name"
				placeholder={category.name}
				value={catName}
				onChange={(e) => setName(e.target.value)}
			  />
			</div>
			<div className="col-lg-12 col-md-12">
			  <input
				type="file"
				placeholder={category.image}
				name="image"
				accept="image/*"
				onChange={(e) => setImage(e.target.files[0])}
			  />
			</div>
		<div style={{display:"flex",width:"200px"}}>
			<div className="col-lg-12 col-md-12">
			  	<input type="submit" name="submit" value="Submit" />
			</div>
			<div className="col-lg-12 col-md-12">
          		<button type="button" onClick={onCancel}>Cancel</button>
        	</div>
		</div>
		  </form>
		</div>
	  );
	};

export default CategoryEditForm;
