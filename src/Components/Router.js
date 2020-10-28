/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import MyPage from "../Routes/MyPage";
import ProductR from "../Routes/ProductR";
import Search from "../Routes/Search";
import Nav from "./Nav";
import Header from "./Header";

export default () => (
	<HashRouter>
		<>
			<Header />
			<Nav />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/product_register' component={ProductR} />
				<Route path='/search' component={Search} />
				<Route path='/my_page' component={MyPage} />
				<Redirect from='*' to='/' />
			</Switch>
		</>
	</HashRouter>
);
