import PostForm from "./PostForm";
import PostsTable from "./PostsTable";
import React,{ useState } from 'react';


const PostsDashboard = () => {

    const [showCreateForm, setShowCreateForm] = useState(false)
    const handleCreateClick = () => {
    setShowCreateForm(!showCreateForm);
    };

    return (
      <div>
        <h1>Posts</h1>
        <button className="guru-btn" id="create-btn" onClick={handleCreateClick}>Add Post</button>
        {showCreateForm && (
				<div className="reply-form-wrapper">
				<PostForm clickHandler={handleCreateClick}/>
				</div>
			)}
        <PostsTable />
      </div>
    );
  };

  export default PostsDashboard;
  