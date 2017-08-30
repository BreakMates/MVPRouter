import React, { Component } from 'react';
import './BrandHeader.css';
import Button from 'material-ui/Button';

class BrandHeader extends Component {

	scrollIntoView() {
   	window.scrollTo(0,document.body.scrollHeight);
   	document.getElementById("email").focus();
	}

	changeImage(mocks) {
		window.current = (window.current >= window.max - 1)?0:window.current + 1;
		var url = mocks[window.current];
    document.getElementById('mockup').src = url;
	}

	componentDidMount() {
		window.max = this.props.mocks.length;
		window.current = 0;
    window.url1 = document.getElementById('mockup').src;
		window.setInterval(() => this.changeImage(this.props.mocks), 5000);
	}

	render(){
		return (
				<div className="container">
					<h1>{this.props.hook.title}</h1><br/><br/>
					<img alt="phone frame" src="/images/mockup.png" className="phone-mock"/><br/>
					<img alt="phone mockup" src={this.props.mocks[0]} className="screen-mock" id="mockup"/><br/>
					<p className="hookText">{this.props.hook.text}</p>
					<Button raised color="accent" onClick={this.scrollIntoView}>{this.props.hook.button}</Button>
				</div>
			)
	}
}

export default BrandHeader;