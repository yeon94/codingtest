import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import logo from "../assets/headerlogo.png";
import { colors } from "./colors";
import { GiCancel } from "react-icons/gi";
const HeaderWrap = {
	width: "100%",
	height: "40px",
	display: "flex",
	"align-items": "center",
	"justify-content": "center",
	position: "fixed",
	left: "0",
	top: "0",
	"background-color": "#ffffff",
	"z-index": "10000",
};

const MHeader = styled.div`
	${HeaderWrap}
	display: ${(props) => (props.currnet ? "flex" : "none")};
`;
const SHeader = styled.div`
	${HeaderWrap}
	display: ${(props) => (props.currnet ? "flex" : "none")};
	color: ${colors.main};
	font-weight: bold;
`;

const PHeader = styled.div`
	${HeaderWrap}
	display: ${(props) => (props.currnet ? "flex" : "none")};
`;

const CText = styled(Link)`
	text-decoration: none;
	color: ${colors.main};
	padding: 0 20px;
	position: absolute;
	left: 0;
`;
const MyHeader = styled.div`
	${HeaderWrap}
	display: ${(props) => (props.currnet ? "flex" : "none")};
	color: ${colors.main};
	font-weight: bold;
`;

export default withRouter(({ location: { pathname } }) => {
	return (
		<>
			<MHeader currnet={pathname === "/"}>
				<img src={logo} alt='티릴리 로고' style={{ height: "50%" }} />
			</MHeader>
			<SHeader currnet={pathname === "/search"}>검색하기</SHeader>
			<PHeader currnet={pathname === "/product_register"}>
				<CText to='/'>
					<GiCancel size={"1.8rem"} />
				</CText>
				상품등록
			</PHeader>
			<MyHeader currnet={pathname === "/my_page"}>마이 페이지</MyHeader>
		</>
	);
});
