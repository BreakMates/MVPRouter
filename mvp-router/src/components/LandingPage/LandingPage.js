import React, { Component } from 'react';
import BrandHeader from './BrandHeader/BrandHeader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class LandingPage extends Component {
	render(){
		return (
				<MuiThemeProvider>
					<BrandHeader hook={this.props.config.hook}/>
				</MuiThemeProvider>
			)
	}
}

export default LandingPage;