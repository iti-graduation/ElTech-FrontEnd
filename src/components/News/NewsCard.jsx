import { Link } from "react-router-dom";

const NewsCard = ({ post }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-news">
				<div className="news-thumb">
					<img src={post.image} alt="" />
				</div>
				<div className="news-details">
					<span className="post-meta">
						By<a href="#"> Admin</a>, 1 week a go
					</span>
					<h4>
						<Link to={`/news/${post.id}`}>{post.title}</Link>
					</h4>
					<Link className="read-more" to={`/news/${post.id}`}>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
