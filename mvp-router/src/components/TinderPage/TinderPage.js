import React, { Component } from 'react';
import { Link } from 'react-router';

class TinderPage extends Component {
	render() {
		return (
				<div>
					Tinder Landing Page<br/>
	        <Link to="/">Dashboard</Link>
				</div>
			)
	}
}

export default TinderPage;