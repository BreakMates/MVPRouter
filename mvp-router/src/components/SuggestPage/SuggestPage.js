import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import config from './SuggestConfig';

class SuggestPage extends Component {
	render() {
		var seed = Math.random() * 100;

		var conf = null;
		for(var i = 0; i < config.weights.length; i++){
			if(config.weights[i].weight >= seed){
				conf = config[config.weights[i].name];
				break;
			}
		}

		window.mixpanel.track("Render-" + conf.id);
		return (
				<div>
					<LandingPage config={conf}/>
				</div>
			)
	}
}

export default SuggestPage;