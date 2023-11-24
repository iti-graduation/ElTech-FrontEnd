import React from "react";
import ItemDetails from "../../components/ProductsDetails/ProductSection/ItemDetails";
import ProductTab from "../../components/ProductsDetails/ProductsTab/ProductTab";
import RelatedProducts from "../../components/ProductsDetails/RelatedProducts/RelatedProducts";

const ProductSection = ({
	product,
	handleAddProductToCart,
	handleUpdateProductToCart,
	handleQuantity,
	inCart,
	quantity,
}) => {
	console.log(product);
	return (
		<section className="single-product-section">
			<div className="container">
				<ItemDetails
					product={product}
					handleAddProductToCart={handleAddProductToCart}
					handleUpdateProductToCart={handleUpdateProductToCart}
					handleQuantity={handleQuantity}
					inCart={inCart}
					quantity={quantity}
				/>
				<ProductTab product={product} />
				{/* <RelatedProducts /> */}
			</div>
		</section>
	);
};

export default ProductSection;
