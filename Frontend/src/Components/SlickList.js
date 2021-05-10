import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/Slider.scss";
const SlickList = ({ data }) => {
	const selector = useSelector((state) => state.ProductsData.Products);
	const [currency, setCurrency] = useState("$");
	const length = Object.keys(selector).length - 1;
	return (
		<div className="box">
			<div className="data">
				<div className="title">
					{selector.length > 0 && <span>{selector[length].productName}</span>}
					<span className="slick-price">
						{Object.keys(selector).length > 0 && (
							<span>{`(${selector.price}${currency})`}</span>
						)}
					</span>
				</div>
				<div className="img">
					{selector.length > 0 && (
						<img src={selector[length - 1].Image} alt="" />
					)}
				</div>
			</div>
			<div className="data">
				<div className="title">
					{selector.length > 0 && (
						<span>{selector[length - 1].productName}</span>
					)}
					<span className="slick-price">
						{Object.keys(selector).length > 0 && (
							<span>{`(${selector[length - 1].price}${currency})`}</span>
						)}
					</span>
				</div>
				<div className="img">
					{selector.length > 0 && (
						<img src={selector[length - 1].Image} alt="" />
					)}
				</div>
			</div>
		</div>
	);
};

export default SlickList;
