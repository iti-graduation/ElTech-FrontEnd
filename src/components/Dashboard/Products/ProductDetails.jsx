import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSingleProduct } from "../../../api/services/user/product-services";

import ItemDetails from "./ProductDetails/ItemDetails";
import ProductTab from "./ProductDetails/ProductTab";
import ProductEditForm from "./ProductEditForm";
import SideNav from "../../../layouts/Dashboard/SideNav";
import ProductDetailsTab from "../../ProductsDetails/ProductsTab/ProductTab";

const ProductDetails = () => {
	const [product, setProduct] = useState();
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const product = await getSingleProduct(id);
				setProduct(product);
			} catch (error) {
				console.error("Error fetching product:", error.message);
			}
		};

		fetchProduct();
	}, [id]);

	return (
		<>
			{/* <SideNav  /> */}
			<section className="single-product-section">
				<div className="container">
					{product && (
						<>
							<ItemDetails product={product} />
							<ProductTab product={product} />
						</>
					)}

					{/* <RelatedProducts /> */}
				</div>
			</section>

			<div className="reply-form-wrapper" style={{ marginTop: "300px" }}>
				{product && <ProductEditForm product={product} />}
			</div>
		</>
	);
};

export default ProductDetails;
