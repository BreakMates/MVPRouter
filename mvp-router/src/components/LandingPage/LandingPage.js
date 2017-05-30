import React, { Component } from 'react';
import BrandHeader from './BrandHeader/BrandHeader';
import SellingSection from './SellingSection/SellingSection';
import SignupSection from './SignupSection/SignupSection';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, pink, red } from 'material-ui/styles/colors';
import createPalette from 'material-ui/styles/palette';
import './LandingPage.css';

const theme = createMuiTheme({
  palette: createPalette({
    primary: blue, // Purple and green play nicely together.
    accent: pink,
    error: red,
  }),
});

class LandingPage extends Component {
	render(){
		return (
				<MuiThemeProvider theme={theme}>
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