import ProductCard from "./ProductCard";

const ProductsRow = ({ products }) => {
	return (
		<div className="row">
			{products.map((product) => {
				return (
					<div key={product.id} className="col-lg-6 col-md-6">
						<ProductCard product={product} />
					</div>
				);
			})}
		</div>
	);
};

export default ProductsRow;
