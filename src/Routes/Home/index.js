import React, { Component } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { colors } from "../../Components/colors";

const HomeWrap = styled.div`
	width: 100%;
	background-color: ${colors.textGray1};
`;

const ProductSlide = styled.div`
	height: 80px;
	margin: 10px;
	border: 1px solid #000;
	margin-right: 10px;
`;

const BestProductSlide = styled.div`
	height: 237px;
	border: 1px solid #000;
`;

const NewProductSlide = styled.div`
	height: 322.1px;
	border: 1px solid #000;
`;

const Banner = styled.div`
	width: 100%;
	height: 180px;
	background-color: ${colors.main};
`;

export default class Home extends Component {
	render() {
		const settings = {
			className: "center",
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 4,
			swipeToSlide: true,
		};
		const bestSetting = {
			className: "center",
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 1.3,
			swipeToSlide: true,
		};
		const newSetting = {
			className: "center",
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 2,
			swipeToSlide: true,
		};
		return (
			<HomeWrap>
				<Banner />

				<div
					style={{
						height: 180,
						marginTop: 12,
						marginBottom: 12,
						backgroundColor: "#ffffff",
						padding: 12,
					}}>
					<Slider {...settings}>
						<ProductSlide />
						<ProductSlide />
						<ProductSlide />
						<ProductSlide />
						<ProductSlide />
						<ProductSlide />
					</Slider>
				</div>
				<div
					style={{
						height: 333,
						padding: 10,
						backgroundColor: "#ffffff",
						marginBottom: 12,
					}}>
					<h2>티릴리 베스트상품</h2>
					<Slider {...bestSetting}>
						<BestProductSlide />
						<BestProductSlide />
						<BestProductSlide />
						<BestProductSlide />
						<BestProductSlide />
						<BestProductSlide />
					</Slider>
				</div>
				<div
					style={{
						height: 322.1,
						backgroundColor: "#ffffff",
						marginBottom: 99.1,
					}}>
					<h2>이번달 신상품</h2>
					<Slider {...newSetting}>
						<NewProductSlide />
						<NewProductSlide />
						<NewProductSlide />
						<NewProductSlide />
						<NewProductSlide />
						<NewProductSlide />
					</Slider>
				</div>
			</HomeWrap>
		);
	}
}
