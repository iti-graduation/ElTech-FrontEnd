import authorImage from "../../assets/images/blog/c1.jpg";

const Comment = ({ author, date, content }) => {
	return (
		<div className="single-comment">
			<img src={authorImage} alt="" />
			<h5>
				<a href="#">{author}</a>
				<span>{date}</span>
			</h5>
			<div className="comment">
				<p>{content}</p>
			</div>
			<a className="comment-reply-link" href="#">
				Reply
			</a>
		</div>
	);
};

export default Comment;
