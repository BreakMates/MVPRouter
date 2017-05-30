import React, { Component } from 'react';
import './SellingSection.css';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';

class SellingSection extends Component {
	render(){
		return (
				<Grid container className="root sellingContainer">
					<Grid item xs={12}>
	          <Grid container justify="center" className="salesPanel">
	            {Array.from({ length: 3 }, (v, k) => k).map(index => (
	              <Grid key={index} item xs={10} md={3}>
	                <Card className="salesPaper">
	                	{this.props.selling.icons}
	                </Card>
	              </Grid>
	            ))}
	          </Grid>
	        </Grid>
				</Grid>
			)
	}
}

export default SellingSection;