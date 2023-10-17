import { Link } from "react-router-dom";

const Banner = ({ name }) => {
	return (
		<section className="page-banner">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<span className="round-shape"></span>
						<h2 className="banner-title">{name}</h2>
						<div className="bread-crumb">
							<Link to="/">Home</Link> / {name}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
