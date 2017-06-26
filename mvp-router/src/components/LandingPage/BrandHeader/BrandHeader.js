import React, { Component } from 'react';
import './BrandHeader.css';
import Button from 'material-ui/Button';
import Mockup from './../../../resources/mockup.png';

class BrandHeader extends Component {

	scrollIntoView() {
   	window.scrollTo(0,document.body.scrollHeight);
   	document.getElementById("email").focus();
	}

	render(){
		return (
				<div className="container">
					<img alt="phone frame" src={Mockup} className="phone-mock"/><br/>
					<h2>{this.props.hook.title}</h2><br/>
					<p className="hookText">{this.props.hook.text}</p>
					<Button raised color="accent" onClick={this.scrollIntoView}>{this.props.hook.button}</Button>
				</div>
			)
	}
}

export default BrandHeader;