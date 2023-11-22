import React, { useState ,useEffect} from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { addPost } from "../../../api/services/user/post-services"; // Import your authentication context
import { getAllCategories } from "../../../api/services/user/product-services";



const PostForm = ({clickHandler}) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [image, setImage] = useState('');
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	
  
	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {	

			const userData = await getUserData();
			const userId = userData.id;
			
			const response = await addPost(title, content, image ,selectedCategory , userId);
			console.log('Post added successfully:', response);
			console.log(response);

			setTitle('');
			setContent('');
			setImage('');
			setSelectedCategory(''); 
		} catch (error) {
		  console.error('Error adding post:', error.message);
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
		  <h5>Add new Post</h5>
		  <form onSubmit={handleSubmit} className="dashboard-form" id="dashboard-form">
			<div className="col-lg-12 col-md-12">
			  <input
				type="text"
				name="title"
				placeholder="Post Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			  />
			</div>
			<div className="col-lg-12 col-md-12">
			  <textarea
				name="content"
				placeholder="Post Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			  ></textarea>
			</div>
			<div className="col-lg-12 col-md-12">
			  <input
				type="file"
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
			<div className="col-lg-12 col-md-12">
			  <input type="submit" name="submit" value="Submit" />
			</div>
		  </form>
		</div>
	  );
	};

export default PostForm;
