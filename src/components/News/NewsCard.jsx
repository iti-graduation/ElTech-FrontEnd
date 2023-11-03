import image from "../../assets/images/blog/1.jpg";

const NewsCard = ({ title }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-news">
				<div className="news-thumb">
					<img src={image} alt="" />
				</div>
				<div className="news-details">
					<span className="post-meta">
						By<a href="#"> Admin</a>, 1 week a go
					</span>
					<h4>
						<a href="single-post.html">{title}</a>
					</h4>
					<a className="read-more" href="single-post.html">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
