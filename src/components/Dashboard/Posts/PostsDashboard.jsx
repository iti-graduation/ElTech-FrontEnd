import PostForm from "./PostForm";
import PostsTable from "./PostsTable";
import React,{ useState } from 'react';


const PostsDashboard = () => {

    const [showReplyForm, setShowReplyForm] = useState(false)
    const handleCreateClick = () => {
    setShowReplyForm(!showReplyForm);
    };

    return (
      <div>
        <h1>Posts</h1>
        <button className="guru-btn" onClick={handleCreateClick}>Create New Post</button>
        {showReplyForm && (
				<div className="reply-form-wrapper">
				<PostForm clickHandler={handleCreateClick}/>
				</div>
			)}
        <PostsTable />
      </div>
    );
  };

  export default PostsDashboard;
  