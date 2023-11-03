import image from "../../assets/images/blog/1.jpg";

const NewsCard = ({ title }) => {
	return (
		<div class="col-lg-4 col-md-6">
			<div class="single-news">
				<div class="news-thumb">
					<img src={image} alt="" />
				</div>
				<div class="news-details">
					<span class="post-meta">
						By<a href="#"> Admin</a>, 1 week a go
					</span>
					<h4>
						<a href="single-post.html">{title}</a>
					</h4>
					<a class="read-more" href="single-post.html">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
