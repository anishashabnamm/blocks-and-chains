import React, { Component } from 'react';
import Landing from './Landing';
import Navigation from "./common/Navigation";

class App extends Component {
	
	constructor(props) {
	  super(props);
	  this.state = { walletInfo: {} };
	}
  
	componentDidMount() {
	  fetch('http://localhost:3000/api/wallet-info')
		.then(response => response.json())
		.then(data => this.setState({ walletInfo: data }));
	}

	render() {
		const { address, balance } = this.state.walletInfo;
		return (
			<div>
				<Navigation />
				<Landing />
				
			</div>
		);
	}
}

export default App;