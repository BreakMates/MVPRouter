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
						<Grid align="center" justify="center" container spacing={24}>
							<Grid item md={3} xs={8} >
								<div>
									<h3>{this.props.content.headline}</h3>
									<p>{this.props.content.details}</p>
								</div>
							</Grid>
							<Hidden smDown>
								<Grid item md={4}>
									<div>
										<img src={this.props.content.imageUrl} className="phone-mock" alt="mockup"/>
									</div>
								</Grid>
							</Hidden>
						</Grid>)
						:
						(
						<Grid align="center" justify="center" container spacing={24}>
							<Hidden smDown>
								<Grid item md={4}>
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