import ShopDetailsCategories from "../Shop/ShopDetails/ShopDetailsCategories";
import NormalProductCard from "../Shared/NormalProductCard/NormalProductCard";

const CategoryDetails = ({ products }) => {
	return (
		<div className="container-fluid">
			<ShopDetailsCategories />

			<div className="row">
				{products &&
					products.map((product) => (
						<NormalProductCard key={product.id} product={product} />
					))}

				{!products && <h1>No Products in this category.</h1>}
			</div>
		</div>
	);
};

export default CategoryDetails;
