import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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