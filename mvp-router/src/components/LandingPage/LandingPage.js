import React, { Component } from 'react';
import BrandHeader from './BrandHeader/BrandHeader';
import SellingSection from './SellingSection/SellingSection';
import SignupSection from './SignupSection/SignupSection';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './LandingPage.css';

injectTapEventPlugin();

class LandingPage extends Component {
	render(){
		return (
				<MuiThemeProvider>
					<div>
						<BrandHeader hook={this.props.config.hook}/>
						<SellingSection />
						<SignupSection signuphook={this.props.config.signuphook} register={this.props.config.register}/>
					</div>
				</MuiThemeProvider>
			)
	}
}

export default LandingPage;