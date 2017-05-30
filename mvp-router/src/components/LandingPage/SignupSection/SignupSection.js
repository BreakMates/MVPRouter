import React, { Component } from 'react';
import './SignupSection.css';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class SignupSection extends Component {
	render(){
		return (
				<div className="signupContainer">
					<h2>{this.props.signuphook.title}</h2>
					<Card className="signupCard">
						<CardContent> 
							<Typography type="headline" gutterBottom>{this.props.register.title}</Typography>
							<Typography type="caption">{this.props.register.subtitle}</Typography>
							<TextField className="email" label={this.props.register.hint}/><br/>
						</CardContent>
						<CardActions>
				      <Button raised primary>{this.props.register.button}</Button>
				    </CardActions>
					</Card>
				</div>
			)
	}
}

export default SignupSection;