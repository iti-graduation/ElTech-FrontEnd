import PostMeta from "../../components/News/PostMeta";
import SocialShare from "../../components/News/SocialShare";
import PostContent from "../../components/News/PostContent";
import CommentArea from "../../components/News/CommentArea";

const NewsDetailsLayout = () => {
	return (
		<section className="blog-details-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="single-blog">
							<PostMeta category="Smartphones" />
							<div className="row">
								<SocialShare />
								<div className="col-lg-9 col-md-9">
									<PostContent
										title="Proin vitae dignissim enim, a iaculis sapien. nisi et dign sim
				efficitur, sapien lorem porta lorem."
										content="Morbi mollis vestibulum
                sollicitudin. Nunc in eros a justo
                facilisis rutrum. Aenean id
                ullamcorper libero. Vestibulum
                imperdiet nibh vel magna lacinia
                ultrices. Sed id interdum urna. Nam
                ac elit a ante commodo tristique.
                Duis lacus urna, condimentum a
                vehicula a, hendrerit ac nisi Lorem
                ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam vulputate,
                tortor nec commodo ultricies, lectus
                nisl facilisis enim, vitae viverra
                urna nulla sed turpis. Nullam
                lacinia faucibus risus."
										features={[
											"5.5 “ Screen, 1080 x 1920 screen size",
											"10 cm height",
											"7 hours calling time",
											"20 MP Camera",
											"12 MP Selfie Camera",
										]}
										tag="Smartphone"
									/>
									<CommentArea count="2" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsDetailsLayout;
