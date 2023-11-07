import { useLocation } from "react-router-dom";

import PostMeta from "../../components/News/PostMeta";
import SocialShare from "../../components/News/SocialShare";
import PostContent from "../../components/News/PostContent";
import CommentArea from "../../components/News/CommentArea";

const NewsDetailsLayout = () => {
	const location = useLocation();
	const post = location.state.post;

	return (
		<section className="blog-details-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="single-blog">
							<PostMeta category={post.category} />
							<div className="row">
								<SocialShare />
								<div className="col-lg-9 col-md-9">
									<PostContent post={post} tag={post.tag} />
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
