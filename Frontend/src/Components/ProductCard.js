import React from "react";
import "../Styles/ProductCard.scss";
import { Button } from "@material-ui/core";

const ProductCard = ({ product, index }) => {
	return (
		<>
			<div className="card">
				<div className="card-content">
					<div className="card-right">
						<div className="product-name">
							{product ? <strong>{product.productName}</strong> : ""}
						</div>
						<div className="product-price">
							<span>{product.price}$</span>
						</div>
						<div className="stars">{product.Rating}</div>
					</div>
					<div className="card-left">
						<img src={product.Image} alt="" />
					</div>
				</div>
				<div className="card-buttons">
					<div className="addtocart">
						<Button className="btn" variant="outlined" color="default">
							Add to Cart
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
