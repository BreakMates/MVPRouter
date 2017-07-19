import React, { Component } from 'react';
import './BrandHeader.css';
import Button from 'material-ui/Button';
import Mockup from './../../../resources/mockup.png';
import Screenshot1 from './../../../resources/sug-1.png';
import Screenshot2 from './../../../resources/sug-2.png';

class BrandHeader extends Component {

	scrollIntoView() {
   	window.scrollTo(0,document.body.scrollHeight);
   	document.getElementById("email").focus();
	}

	changeImage() {
		var url = document.getElementById('mockup').src;
		if (url === window.url1) {
      document.getElementById('mockup').src = Screenshot1;
    } else {
      document.getElementById('mockup').src = Screenshot2;
    }
	}

	componentDidMount() {
    window.url1 = document.getElementById('mockup').src;
		window.setInterval(this.changeImage, 5000);
	}

	render(){
		return (
				<div className="container">
					<img alt="phone frame" src={Mockup} className="phone-mock"/><br/>
					<img alt="phone mockup" src={Screenshot2} className="screen-mock" id="mockup"/><br/>
					<h2>{this.props.hook.title}</h2><br/>
					<p className="hookText">{this.props.hook.text}</p>
					<Button raised color="accent" onClick={this.scrollIntoView}>{this.props.hook.button}</Button>
				</div>
			)
	}
}

export default BrandHeader;