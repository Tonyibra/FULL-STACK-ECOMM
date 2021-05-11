import React, { useState } from "react";
import "../Styles/ProductCard.scss";
import { Button } from "@material-ui/core";
import { stars, foramtLBPRates } from "../util";
import { Link } from "react-router-dom";
const ProductCard = ({ product, currency, lbpRate }) => {
	stars(product.Rating);
	console.log(stars());
	return (
		<>
			<div className="card">
				<Link to={`/product/${product._id}`} className="card-content">
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
				</Link>
				<div className="card-buttons">
					<div className="addtocart">
						<Link to="/cart">
							<Button className="btn" variant="outlined" color="default">
								Add to Cart
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
