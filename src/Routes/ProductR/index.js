import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Components/colors";
import { product } from "../../Components/db";

const Wrap = styled.div`
	width: 90%;
`;

const InnerWrap = styled.div`
	height: 74px;
	width: 100%;
`;
const Title = styled.h3``;

const ProductName = styled.input.attrs({
	type: "text",
	placeholder: "상품명을 입력해주세요",
})`
	width: 80%;
	max-width: 350px;
	height: 44px;
	object-fit: contain;
	border-radius: 4px;
	box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
	background-color: #ffffff;
	border: 0.5px solid ${colors.textGray1};
	:focus {
		outline: none;
	}
`;

const Price = styled.input.attrs({
	type: "text",
	placeholder: "상품가격을 입력해주세요",
})`
	width: 80%;
	max-width: 350px;
	height: 44px;
	object-fit: contain;
	border-radius: 4px;
	box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
	background-color: #ffffff;
	border: 0.5px solid ${colors.textGray1};
	:focus {
		outline: none;
	}
`;

const Classify = styled.ul`
	display: flex;
`;

const Size = styled.ul``;

const ProductList = styled.li``;

const PButton = styled.button``;

export default class ProductR extends Component {
	render() {
		return (
			<Wrap>
				<InnerWrap>
					<Title>상품명</Title>
					<ProductName />
				</InnerWrap>
				<InnerWrap>
					<Title>가격</Title>
					<Price />
				</InnerWrap>
				<InnerWrap>
					<Title>분류</Title>
					<Classify>
						{product.map((prop) => (
							<ProductList>{prop.title}</ProductList>
						))}
					</Classify>
				</InnerWrap>
				<InnerWrap>
					<Title>사이즈</Title>
					<Size></Size>
				</InnerWrap>
			</Wrap>
		);
	}
}
