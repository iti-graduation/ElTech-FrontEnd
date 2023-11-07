const CommentForm = () => {
	return (
		<div className="comment-form-wrapper">
			<h5>LEAVE A COMMENT</h5>
			<form action="#" method="post" className="row comment-form">
				<div className="col-lg-6 col-md-6">
					<input type="text" name="name" placeholder="Name" />
				</div>
				<div className="col-lg-6 col-md-6">
					<input type="email" name="email" placeholder="Email" />
				</div>
				<div className="col-lg-12 col-md-12">
					<textarea
						name="message"
						placeholder="Your message"
					></textarea>
				</div>
				<div className="col-lg-12 col-md-12">
					<input type="submit" name="submit" value="post" />
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
