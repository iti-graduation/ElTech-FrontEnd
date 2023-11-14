import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSingleProduct } from "../api/services/user/product-services";

import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import Footer from "../layouts/Home/Footer";
import ProductSection from "../layouts/ProductsDetails/ProductSection";

export default function ProductDetails() {
	const [product, setProduct] = useState({});
	const [category, setCategory] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const data = await getSingleProduct(id);
				console.log(data);
				setProduct(data);
				setCategory(data.category);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProduct();
	}, [id]);

	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			{category && <PageBanner section="Shop" category={category} />}
			{product && <ProductSection product={product} />}
			<Footer className="inner-footer" />
		</>
	);
}
