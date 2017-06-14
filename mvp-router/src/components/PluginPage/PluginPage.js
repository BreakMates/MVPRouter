import React, { Component } from 'react';
import { Link } from 'react-router';

class PluginPage extends Component {
	render() {
		return (
				<div>
					Plugin Landing Page<br/>
	        <Link to="/">Dashboard</Link>
				</div>
			)
	}
}

export default PluginPage;