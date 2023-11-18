import React, { useState } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { addPost } from "../../../api/services/user/post-services"; // Import your authentication context


const PostForm = ({clickHandler}) => {
	const userData = getUserData();
	const userEmail = userData.email; 
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [image, setImage] = useState('');
  
	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {	
		  // Call the addPost API function
		  const response = await addPost(title, content, image);
		  console.log('Post added successfully:', response);
		  console.log(response);
	
		  // Reset the form after successful submission
		  setTitle('');
		  setContent('');
		  setImage('');
		} catch (error) {
		  console.error('Error adding post:', error.message);
		}
	  };

	return (
		<div className="comment-form-wrapper">
		  <h5>Add new Post</h5>
		  <form onSubmit={handleSubmit} className="row comment-form">
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
			  <input type="submit" name="submit" value="Submit" />
			</div>
		  </form>
		</div>
	  );
	};

export default PostForm;
