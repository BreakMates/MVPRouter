import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import config from './SuggestConfig';

class SuggestPage extends Component {
	render() {
		window.mixpanel.track("Render-" + this.props.landerId);
		return (
				<div>
					<LandingPage config={config}/>
				</div>
			)
	}
}

export default SuggestPage;