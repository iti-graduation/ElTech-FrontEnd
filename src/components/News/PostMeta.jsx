import postImage from "../../assets/images/blog/blog-details.jpg";
import authorImage from "../../assets/images/blog/author.jpg";

const PostMeta = ({ category }) => {
	return (
		<>
			<div className="blog-thumb">
				<img src={postImage} alt="" />
			</div>
			<div className="blog-post-meta">
				<span>
					<img src={authorImage} alt="" />
					By <a href="#">Admin</a>, 1 week a go{" "}
				</span>
				<span className="cate">
					<a href="#">{category}</a>
				</span>
			</div>
		</>
	);
};

export default PostMeta;
