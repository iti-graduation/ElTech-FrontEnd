import NewsCard from "../../components/News/NewsCard";

const NewsLayout = () => {
	return (
		<section class="blog-section">
			<div class="container">
				<div class="row">
					<NewsCard
						title="Nam ac elit a ante commodo Condimentum a
                        vehicula tristique"
					/>
					<NewsCard
						title="Excepteur sint occaecat cupidatat non
										proident, sunt in culpa"
					/>
					<NewsCard
						title="Ut enim ad minim venium eos qui odit
                        lorem telica comuo fira mende"
					/>
					<NewsCard
						title="Nam ac elit a ante commodo Condimentum a
                        vehicula tristique"
					/>
					<NewsCard
						title="Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa"
					/>
					<NewsCard
						title="Ut enim ad minim venium eos qui odit
                        lorem telica comuo fira mende"
					/>
				</div>
				<div class="row m-top-20">
					<div class="col-lg-12 text-center">
						<a href="#" class="goru-btn">
							view more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLayout;
