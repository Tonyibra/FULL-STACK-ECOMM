import React from "react";
import Slider from "react-slick";
import "../Styles/Slider.scss";

const Slick = () => {
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
			<Slider className="slider" {...settings}>
				<div className="box">
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
				</div>
			</Slider>
		</div>
	);
};

export default Slick;
