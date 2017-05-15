import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SuggestPage extends Component {
	render() {
		return (
				<div>
					Suggest Landing Page<br/>
	        <Link to="/">Dashboard</Link>
				</div>
			)
	}
}

export default SuggestPage;