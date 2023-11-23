import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSingleProduct } from "../../../api/services/user/product-services";

import ItemDetails from "./ProductDetails/ItemDetails";
import ProductTab from "./ProductDetails/ProductTab";
import SideNav from "../../../layouts/Dashboard/SideNav";
import ProductDetailsTab from "../../ProductsDetails/ProductsTab/ProductTab";

const ProductDetails = () => {
	const [product, setProduct] = useState();
	const { id } = useParams();

	useEffect(() => {
		console.log("Here!");
		console.log(id);
		const fetchProduct = async () => {
			try {
				const product = await getSingleProduct(id);
				console.log(product);
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
		</>
	);
};

export default ProductDetails;
