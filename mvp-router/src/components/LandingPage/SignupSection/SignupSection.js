import React, { Component } from 'react';
import './SignupSection.css';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

class SignupSection extends Component {

	validEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}

	handleRequestClose(){
		this.setState({snackbar: false});
	}

	async sendEmail(email) {
	  try {
	  	const response = await fetch(
	  		"https://ess.breakmates.com/emails",
	  		{
	  			method: "POST",
	  			mode: "cors",
	  			headers: { 'content-type': 'application/json' },
	  			body: JSON.stringify({
	  				email: email,
	  				key: "9V1ZGaRhEfY9YO27ucUVDXFT5zJPBPv5jpirwZgS"
	  			})
	  		});
	  	if(response.status === 200){
	  		this.setState({snackbar: true});
	  	}
	  } catch(e) {
	    console.error(e);
	  }
	}

	constructor(props) {
		super(props);
		this.submitEmail = () => {
			var email = document.getElementById("email").value;
			if(this.validEmail(email)){
				window.mixpanel.track("Email-Submission-" + this.props.landerId)
				this.sendEmail(email);
			}else{
				this.setState({ errored : true })
			}
		}
	}

	componentWillMount() {
		this.setState({ errored: false, snackbar: false })
	}

	render(){
		return (
				<div className="signupContainer" id="signupContainer">
					<h2>{this.props.signuphook.title}</h2>
					<Card className="signupCard">
						<CardContent> 
							<Typography type="headline" gutterBottom>{this.props.register.title}</Typography>
							<Typography type="caption">{this.props.register.subtitle}</Typography><br/>
							<TextField error={this.state.errored} type="email" className="email" 
								id="email" label={this.props.register.hint}/><br/>
						</CardContent>
						<CardActions>
				      <Button onClick={this.submitEmail} raised color="accent">{this.props.register.button}</Button>
				    </CardActions>
					</Card>
					<h6></h6>
					<Snackbar
	          anchorOrigin={{
	            vertical: 'bottom',
	            horizontal: 'left',
	          }}
	          open={this.state.snackbar}
	          autoHideDuration={5e3}
	          onRequestClose={() => this.handleRequestClose()}
	          message={<span id="message-id">Congratulations, you're on the waitlist!</span>}
	          action={[
	            <IconButton
	              key="close"
	              aria-label="Close"
	              color="inherit"
	              onClick={() => this.handleRequestClose()}
	            >
	              <CloseIcon />
	            </IconButton>,
	          ]}
	        />
				</div>
			)
	}
}

export default SignupSection;