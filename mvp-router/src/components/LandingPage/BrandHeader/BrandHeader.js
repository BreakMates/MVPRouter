import React, { Component } from 'react';
import './BrandHeader.css';
import { RaisedButton } from 'material-ui';
import Mockup from './../../../resources/mockup.png'

class BrandHeader extends Component {
	render(){
		return (
				<div className="container">
					<img alt="phone frame" src={Mockup} className="phone-mock"/><br/>
					<h2>{this.props.hook.title}</h2><br/>
					<p className="hookText">{this.props.hook.text}</p>
					<RaisedButton label="Learn More" labelColor="#64B5F6"/>
				</div>
			)
	}
}

export default BrandHeader;