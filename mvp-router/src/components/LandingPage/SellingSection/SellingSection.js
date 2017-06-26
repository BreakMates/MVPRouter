import React, { Component } from 'react';
import './SellingSection.css';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

class SellingSection extends Component {
	render(){
		return (
			<div className="gridContainer">
				<Grid container className="root sellingContainer">
					<Grid item xs={12} className="innerContainer">
	          <Grid container justify="center" className="salesPanel">
	            {(this.props.selling.points).map((val, i) => {
	              return (
	              	<Grid key={i} item xs={10} md={3}>
		                <Card className="salesPaper">
		                	<span className="salesIcon">
		                		{val.icon}
		                	</span>
		                	<CardContent>
		                		<Typography type="headline" gutterBottom>{val.hook}</Typography>
		                		<Typography type="body1" gutterBottom>{val.text}</Typography>
		                	</CardContent>
		                </Card>
		              </Grid>
		              )
	            })}
	          </Grid>
	        </Grid>
				</Grid>
			</div>
			)
	}
}

export default SellingSection;