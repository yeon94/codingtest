import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Components/colors";

const SearchBody = styled.div`
	width: 100%;
	height: ${window.screen.height}px;
	background-color: ${colors.textGray1};
`;

const SearchWrap = styled.div`
	width: 100%;
	height: 84px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`;

const SearchInput = styled.input.attrs({
	type: "text",
	placeholder: "티릴리 굿즈를 검색해보세요.",
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

export default class Search extends Component {
	render() {
		return (
			<SearchBody>
				<SearchWrap>
					<SearchInput />
				</SearchWrap>
			</SearchBody>
		);
	}
}
