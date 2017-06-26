import React, { Component } from 'react';
import './SignupSection.css';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class SignupSection extends Component {
	constructor(props) {
		super(props);
		this.submitEmail = () => {
			window.ga('send', {
			  hitType: 'event',
			  eventCategory: 'Buttons',
			  eventAction: 'waitlist',
			  eventLabel: 'Lander ' + this.props.landerId
			});
			document.forms["mc-embedded-subscribe-form"].submit();
		}
	}

	render(){
		return (
				<div className="signupContainer" id="signupContainer">
					<h2>{this.props.signuphook.title}</h2>
					<Card className="signupCard">
						<CardContent> 
							<Typography type="headline" gutterBottom>{this.props.register.title}</Typography>
							<Typography type="caption">{this.props.register.subtitle}</Typography>
							<form action="//breakmates.us11.list-manage.com/subscribe/post?u=bd02d7beacbd990a54a94d415&amp;id=4302c148a6" 
								method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
								<input type="hidden" name="b_bd02d7beacbd990a54a94d415_4302c148a6" tabIndex="-1" value=""/>
								<TextField name="EMAIL" className="email" label={this.props.register.hint}/><br/>
							</form>
						</CardContent>
						<CardActions>
				      <Button onClick={this.submitEmail} raised color="accent">{this.props.register.button}</Button>
				    </CardActions>
					</Card>
				</div>
			)
	}
}

export default SignupSection;