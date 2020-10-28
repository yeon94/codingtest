import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt, BiPlusCircle, BiHomeAlt } from "react-icons/bi";
import { colors } from "./colors";

const HEIGHT = window.screen.height;
const Nav = styled.div`
	opacity: 100;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #fff;
	z-index: 10000;
`;

const NavList = styled.ul`
	height: ${(HEIGHT / 100) * 8.39}px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

const NavItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ItemLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-size: 0.8em;
	:active,
	:visited,
	:link {
	}
`;

const IconText = styled.span`
	color: ${(props) => (props.current ? colors.main : colors.textGray1)};
`;

export default withRouter(({ location: { pathname } }) => {
	const iconSize = "1.5rem";
	return (
		<Nav>
			<NavList>
				<NavItem>
					<ItemLink to='/'>
						<BiHomeAlt
							size={iconSize}
							color={pathname === "/" ? colors.main : colors.textGray1}
						/>
						<IconText current={pathname === "/"}>홈</IconText>
					</ItemLink>
				</NavItem>
				<NavItem current={pathname === "/search"}>
					<ItemLink to='/search'>
						<BiSearchAlt
							size={iconSize}
							color={pathname === "/search" ? colors.main : colors.textGray1}
						/>
						<IconText current={pathname === "/search"}>검색</IconText>
					</ItemLink>
				</NavItem>
				<NavItem>
					<ItemLink to='/product_register'>
						<BiPlusCircle
							size={iconSize}
							color={
								pathname === "/product_register"
									? colors.main
									: colors.textGray1
							}
						/>
						<IconText current={pathname === "/product_register"}>
							상품등록
						</IconText>
					</ItemLink>
				</NavItem>
				<NavItem>
					<ItemLink to='/my_page'>
						<CgProfile
							size={iconSize}
							color={pathname === "/my_page" ? colors.main : colors.textGray1}
						/>
						<IconText current={pathname === "/my_page"}>마이페이지</IconText>
					</ItemLink>
				</NavItem>
			</NavList>
		</Nav>
	);
});
