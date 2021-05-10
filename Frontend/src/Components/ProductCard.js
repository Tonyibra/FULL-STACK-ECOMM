import React, { useState } from "react";
import "../Styles/ProductCard.scss";
import { Button } from "@material-ui/core";
import { stars, foramtLBPRates } from "../util";
const ProductCard = ({ product, currency, lbpRate }) => {
	stars(product.Rating);
	console.log(stars());
	return (
		<>
			<div className="card">
				<div className="card-content">
					<div className="card-right">
						<div className="product-name">
							{product ? <strong>{product.productName}</strong> : ""}
						</div>
						<div className="product-price">
							<span>
								{currency === "LBP"
									? `${foramtLBPRates(`${product.price * lbpRate}`)}${currency}`
									: `${product.price}${currency}`}
							</span>
						</div>
						<div className="stars">{/* <img src={stars} alt="" /> */}</div>
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
