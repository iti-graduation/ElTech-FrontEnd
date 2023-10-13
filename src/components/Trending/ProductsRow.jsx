import ProductCard from "./ProductCard";

export default function ProductsRow() {
	return (
		<div className="row">
			<div className="col-lg-6 col-md-6">
				<ProductCard />
			</div>
			<div className="col-lg-6 col-md-6">
				<ProductCard />
			</div>
		</div>
	);
}
