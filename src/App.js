import React, { Component } from "react";
import GlobalStyle from "./Components/GlobalStyle";
import Router from "./Components/Router";

class App extends Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<Router />
			</>
		);
	}
}

export default App;
