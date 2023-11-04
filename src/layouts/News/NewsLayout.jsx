import NewsCard from "../../components/News/NewsCard";

import posts from "../../utils/demoPosts";

const NewsLayout = () => {
	return (
		<section class="blog-section">
			<div class="container">
				<div class="row">
					{posts.map((post) => {
						return <NewsCard key={post.id} post={post} />;
					})}
				</div>
				<div className="row m-top-20">
					<div className="col-lg-12 text-center">
						<a href="#" className="goru-btn">
							view more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLayout;
