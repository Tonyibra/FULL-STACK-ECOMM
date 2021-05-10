import React from "react";
import "../Styles/ProductList.scss";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import Loading from "./Loading";
const ProductList = ({ currency, setCurrency }) => {
	const selector = useSelector((state) => state.ProductsData.Products);
	return (
		<div className="product-list">
			<h2>LATEST PRODUCTS:</h2>
			<div className="product-list-flex">
				{selector.length > 0 ? (
					selector.map((product, index) => (
						<ProductCard
							currency={currency}
							product={product}
							index={index}
							key={product._id}
						/>
					))
				) : (
					<div className="loading">
						<Loading />
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductList;
