import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component {
	render() {
		return (
				<div>
					Dashboard<br/>
	        <Link to="/suggest">Suggest</Link><br/>
	        <Link to="/tinder">Tinder</Link><br/>
	        <Link to="/plugin">Plug-in</Link><br/>
				</div>
			)
	}
}

export default Dashboard;