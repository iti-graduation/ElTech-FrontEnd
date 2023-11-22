import { Link } from "react-router-dom";
import authorImage from "../../assets/images/blog/author.jpg";
import moment from "moment";

const PostMeta = ({ post }) => {
	const formattedDate = moment(post.created_at).fromNow();

	return (
		<>
			<div className="blog-thumb">
				<img src={post.image} alt="" style={{width:"100%",height:"650px"}}/>
			</div>
			<div className="blog-post-meta">
				<span>
					<img src={post.user.image} alt="" />
					By  <a>{post.user.email}</a>, {formattedDate}
				</span>
				<span className="cate">
					<Link to={`/category/${post.category}`}>{post.category}</Link>
				</span>
			</div>
		</>
	);
};

export default PostMeta;
