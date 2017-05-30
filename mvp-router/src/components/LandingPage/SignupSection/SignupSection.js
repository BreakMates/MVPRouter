import React, { Component } from 'react';
import './SignupSection.css';
import { Card, TextField, RaisedButton, CardActions, CardTitle, CardText} from 'material-ui';

class SignupSection extends Component {
	render(){
		return (
				<div className="signupContainer">
					<h2>{this.props.signuphook.title}</h2>
					<Card className="signupCard" zDepth="2">
						<CardTitle title={this.props.register.title} subtitle={this.props.register.subtitle}/>
						<CardText>
							<TextField className="email" fullWidth="true" floatingLabelText="Email Address" hintText="Email"/><br/>
						</CardText>
						<CardActions>
				      <RaisedButton label="Register for Beta" backgroundColor="#64B5F6" labelColor="#FFFFFF"/>
				    </CardActions>
					</Card>
				</div>
			)
	}
}

export default SignupSection;