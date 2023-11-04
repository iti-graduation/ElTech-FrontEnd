import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentArea = ({ count }) => {
	return (
		<div className="comment-area">
			<h4 className="comment-title">
				COMMENT: <span>{count}</span>
			</h4>
			<ol className="comment-list">
				<li>
					<Comment
						author="Jason Statham"
						date="July 06th, 2017"
						content="Proin vitae dignissim enim, a iaculis sapien.
								nisi et dignissim efficitur, sapien lorem et
								tristique nulla lectus fauc-ibus est
								Pellentesque dapibus"
					/>
					<ul className="children">
						<li>
							<Comment
								author="Herbie Darbage"
								date="July 06th, 2017"
								content="Proin vitae dignissim enim, a iaculis
                                sapien. nisi et dignissim efficitur,
                                sapien lorem et tristique nulla lectus
                                faucibus est Pellentesque dapibus"
							/>
						</li>
					</ul>
				</li>
				<li>
					<Comment
						author="Jason Statham"
						date="July 06th, 2017"
						content="Proin vitae dignissim enim, a iaculis sapien.
                        nisi et dignissim efficitur, sapien lorem et
                        tristique nulla lectus fauc-ibus est
                        Pellentesque dapibus"
					/>
				</li>
			</ol>
			<CommentForm />
		</div>
	);
};

export default CommentArea;
