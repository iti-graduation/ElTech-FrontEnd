import { Link } from "react-router-dom";

function NewsCard({ post }) {
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
						<Link to={`/news/${post.id}`}>
							Ut enim ad minim venium eos qui odit lorem telica
							comuo fira mende
						</Link>
					</h4>
					<Link className="read-more" to={`/news/${post.id}`}>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NewsCard;
