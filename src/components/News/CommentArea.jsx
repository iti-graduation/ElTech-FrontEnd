import { useEffect, useState } from "react";
import { getCommentsForPost } from "../../api/services/user/post-services"; // Assuming this is the correct path to your service file
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentArea = ({ postId }) => {
	const [comments, setComments] = useState([]);
	const [commentsCount, setCommentsCount] = useState(0);
	const [refreshFlag, setRefreshFlag] = useState(false);


	useEffect(() => {
	  // Fetch comments when the component mounts or when count changes
	  const fetchComments = async () => {
		try {
		  const fetchedComments = await getCommentsForPost(postId); // Assuming postId is available
		  setComments(fetchedComments);
		  setCommentsCount(fetchedComments.length);
		} catch (error) {
		  console.error("Error fetching comments:", error.message);
		}
	  };
  
	  fetchComments();
	}, [postId,refreshFlag]);// Assuming postId is available

	const renderComments = (parentCommentId = null) => {
		return (
		  <ul className="children">
			{comments
			  .filter((comment) => comment.parent === parentCommentId)
			  .map((comment) => (
				<li key={comment.id}>
				  <Comment
					post_id={postId}
					commentDate={comment.created_at}
					author={comment.user}
					content={comment.content}
					parent={comment.id}
					onCommentSubmit={handleNewComment}
					/>
				  {renderComments(comment.id)} {/* Recursively render nested comments */}
				</li>
			  ))}
		  </ul>
		);
	  };

	const handleNewComment = () => {
		// Logic to create a new comment...
		// After creating a new comment, set the flag to trigger comments refetch
		setRefreshFlag(prevFlag => !prevFlag);
	  };

	return (
		<div className="comment-area">
			<h4 className="comment-title">
			{commentsCount} {commentsCount === 1 ? "Comment" : "Comments"}
			</h4>
			<ol className="comment-list">
					{comments
					.filter((comment) => comment.parent ==null)
					.map((comment) => (
						<li key={comment.id}>
							<Comment
							post_id={postId}
							commentDate={comment.created_at}
							author={comment.user}
							content={comment.content}
							parent={comment.id}
							onCommentSubmit={handleNewComment}
							/>
							{renderComments(comment.id)}
						</li>
				))}
			</ol>
			<CommentForm post_id={postId} onCommentSubmit={handleNewComment}/>
		</div>
	);
};

export default CommentArea;
