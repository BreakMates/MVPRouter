import React, { Component } from 'react';
import './SellingSection.css';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

class SellingSection extends Component {
	render(){
		return (
			<div className="sellingContainer">
				{ this.props.switch ?
					(
						<Grid alignItems="center" justify="center" container spacing={0}>
							<Grid item md={3} xs={8} >
								<div>
									<h3>{this.props.content.headline}</h3>
									<p>{this.props.content.details}</p>
								</div>
							</Grid>
							<Hidden mdDown>
								<Grid item md={5}>
									<div>
										<img src={this.props.content.imageUrl} className="phone-mock" alt="mockup"/>
									</div>
								</Grid>
							</Hidden>
						</Grid>)
						:
						(
						<Grid alignItems="center" justify="center" container spacing={0}>
							<Hidden mdDown>
								<Grid item md={5}>
									<div>
										<img src={this.props.content.imageUrl} className="phone-mock" alt="mockup"/>
									</div>
								</Grid>
							</Hidden>
							<Grid item xs={8} md={3}>
								<div>
									<h3>{this.props.content.headline}</h3>
									<p>{this.props.content.details}</p>
								</div>
							</Grid>
						</Grid>
						)
				}
			</div>
			)
	}
}

export default SellingSection;