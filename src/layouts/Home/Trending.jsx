import { useEffect, useState } from "react";

import { getTrendingProducts } from "../../api/services/user/product-services";

// Importing ProductsRow component from Trending subdirectory in components folder
import ProductsRow from "../../components/Home/Trending/ProductsRow";

// Importing an image asset (shape2) from assets stored in project directory
import shape2 from "../../assets/images/home/shape2.png";

const Trending = () => {
	const [products, setProducts] = useState();

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await getTrendingProducts();
			console.log(data);
			setProducts(
				data.reduce((result, value, index, array) => {
					if (index % 2 === 0)
						result.push(array.slice(index, index + 2));
					return result;
				}, [])
			);
		};

		fetchProducts();
	}, []);

	return (
		<section
			className="trending-section"
			style={{
				backgroundImage: `url(${shape2})`,
			}}
		>
			<div className="sec-heading rotate-tb">
				Trending <span> Products</span>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="sec-title">Trending Products</h2>
						<p className="sec-desc">
							Sed ut perspiciatis unde omnis iste natus er
							<br /> sit voluptatem accusantium dolore.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="trending-slider owl-carousel">
							{products &&
								products.map((productPair, index) => (
									<ProductsRow
										key={index}
										products={productPair}
									/>
								))}
							{/* <ProductsRow />
							<ProductsRow /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Trending;
