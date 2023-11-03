const PostContent = ({ title, content, tag, features }) => {
	return (
		<div className="blog-content">
			<h3 className="blog-title">{title}</h3>
			<p>{content}</p>
			<h4>Features:</h4>
			<ul>
				{features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
			<div className="post-tag">
				<h5>
					Tag: <a href="#"> {tag}</a>
				</h5>
			</div>
		</div>
	);
};

export default PostContent;
