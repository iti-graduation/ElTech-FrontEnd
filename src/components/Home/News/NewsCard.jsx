import { Link } from "react-router-dom";

function NewsCard({ post }) {
	console.log(post);

	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-news">
				<div className="news-thumb">
					<img src={post.image} alt="" />
				</div>
				<div className="news-details">
					<span className="post-meta">
						<a href="#">In TV</a>, 1 week a go
					</span>
					<h4>
						<Link to={`/news/${post.id}`} state={{ post: post }}>
							{post.title}
						</Link>
					</h4>
					<Link
						className="read-more"
						to={`/news/${post.id}`}
						state={{ post: post }}
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NewsCard;
