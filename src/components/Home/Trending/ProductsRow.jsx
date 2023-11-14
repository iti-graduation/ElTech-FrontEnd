import ProductCard from "./ProductCard";

const ProductsRow = ({ products }) => {
	return (
		<div className="row">
			{products.map((product) => {
				return (
					<div className="col-lg-6 col-md-6">
						<ProductCard key={product.id} product={product} />
					</div>
				);
			})}
		</div>
	);
};

export default ProductsRow;
