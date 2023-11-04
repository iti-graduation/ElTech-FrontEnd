const PostContent = ({ post }) => {
	return (
		<div className="blog-content">
			<h3 className="blog-title">{post.title}</h3>
			<p>{post.content}</p>
			<h4>Features:</h4>
			<ul>
				{post.features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
			<div className="post-tag">
				<h5>
					Tag: <a href="#"> {post.tag}</a>
				</h5>
			</div>
		</div>
	);
};

export default PostContent;
