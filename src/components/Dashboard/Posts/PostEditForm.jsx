import React, { useState ,useEffect} from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { updatePost } from "../../../api/services/user/post-services"; // Import your authentication context
import { getAllCategories } from "../../../api/services/user/product-services";




const PostEditForm = ({post , onCancel}) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [image, setImage] = useState('');
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	
  	
	  const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {

			// const updatedData = {
			// 	title: title,
			// 	content: content,
			// 	image: image,
			// 	category_id: selectedCategory,
			//   };

		  const response = await updatePost(post.id, title , content , image , selectedCategory); // Assuming post.id exists
		  console.log('Post updated successfully:', response);
	
		  // Clear form fields after successful update
		  setTitle('');
		  setContent('');
		  setImage('');
		  setSelectedCategory('');
	
		  // Hide the form after successful update
		  onCancel();
		} catch (error) {
		  console.error('Error updating post:', error.message);
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
		  <h5>Edit Post With Title: {post.title} </h5>
		  <form onSubmit={handleSubmit} className="dashboard-form" id="dashboard-form">
			<div className="col-lg-12 col-md-12">
			  <input
				type="text"
				name="title"
				placeholder={post.title}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			  />
			</div>
			<div className="col-lg-12 col-md-12">
			  <textarea
				name="content"
				placeholder={post.content}
				value={content}
				onChange={(e) => setContent(e.target.value)}
			  ></textarea>
			</div>
			<div className="col-lg-12 col-md-12">
			  <input
				type="file"
				placeholder={post.image}
				name="image"
				accept="image/*"
				onChange={(e) => setImage(e.target.files[0])}
			  />
			</div>
			<div className="col-lg-12 col-md-12">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
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

export default PostEditForm;
