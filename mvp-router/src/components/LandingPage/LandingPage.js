import React, { Component } from 'react';
import BrandHeader from './BrandHeader/BrandHeader';
import SellingSection from './SellingSection/SellingSection';
import SignupSection from './SignupSection/SignupSection';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, pink, red } from 'material-ui/colors';
import './LandingPage.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
  }
});

class LandingPage extends Component {
	render(){
		return (
				<MuiThemeProvider theme={theme}>
					<div>
						<BrandHeader hook={this.props.config.hook} mocks={this.props.config.mocks}/>
						{
							(this.props.config.selling.points).map((val, i) => {
	              return <SellingSection key={i} switch={i%2 === 0} content={val}/>
	           	})
						}
						<SignupSection signuphook={this.props.config.signuphook} 
							landerId={this.props.config.id}
						 	register={this.props.config.register}/>
					</div>
				</MuiThemeProvider>
			)
	}
}

export default LandingPage;