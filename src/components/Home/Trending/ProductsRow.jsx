import ProductCard from "./ProductCard";

const ProductsRow = () => {
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

export default ProductsRow;
