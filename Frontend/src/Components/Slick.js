import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../Styles/Slider.scss";
import { useSelector } from "react-redux";
import { FeaturedProducts, foramtLBPRates } from "../util";
import Loading from "./Loading";
import SlickList from "./SlickList";
import { Link } from "react-router-dom";

const Slick = ({ currency, setCurrency, lbpRate }) => {
	const selector = useSelector((state) => state.ProductsData.Products);
	const length = Object.keys(selector).length - 1;

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<div className="slick-container">
			{selector && selector.length > 0 ? (
				<div className="slick-container">
					<Slider className="slider" {...settings}>
						<Link to={`/product/${selector[length]._id}`}>
							<div className="box">
								<div className="data">
									<div className="img">
										<img
											src={selector[length].Image}
											alt={selector[length].productName}
										/>
									</div>
									<div className="right-part">
										<div className="title">{selector[length].productName}</div>
										<div className="price">
											<span className="slick-price">
												Price :
												{currency === "LBP"
													? `${foramtLBPRates(
															`${selector[length].price * lbpRate}`
													  )}${currency}`
													: `${selector[length].price}${currency}`}
											</span>
											<div className="btn-flex">{/* btn */}</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
						<Link to={`/product/${selector[length - 1]._id}`}>
							<div className="box">
								<div className="data">
									<div className="img">
										<img
											src={selector[length - 1].Image}
											alt={selector[length - 1].productName}
										/>
									</div>
									<div className="right-part">
										<div className="title">
											{selector[length - 1].productName}
										</div>
										<div className="price">
											<span className="slick-price">
												Price :
												{currency === "LBP"
													? `${foramtLBPRates(
															`${selector[length - 1].price * lbpRate}`
													  )}${currency}`
													: `${selector[length - 1].price}${currency}`}
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</Slider>
				</div>
			) : (
				<div className="loading">
					<Loading />
				</div>
			)}

			{/* <div className="box">
					<div className="data">
						<div className="title">
							Iphone 12 <span className="slick-price">(999$)</span>
						</div>
						<div className="img">
							<img src="/imgs/iphone-12.png" alt="" />
						</div>
					</div>
				</div>
				<div className="box">
					<div className="data">
						<div className="title">
							Iphone 12 <span className="slick-price">(999$)</span>
						</div>
						<div className="img">
							<img src="/imgs/iphone-12.png" alt="" />
						</div>
					</div>
				</div> */}
		</div>
	);
};

export default Slick;
