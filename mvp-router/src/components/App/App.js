import React, { Component } from 'react';
import './App.css';

class App extends Component {

	componentWillMount() {
		var mixpanelMock = {
        init: function() {
          console.log("mixpanel.init", arguments);
        },
        track: function() {
          console.log("mixpanel.track", arguments);
        }
      };

    if(window.location.host.split(":")[0] !== "localhost" && window.location.protocol !== "https:"){
      window.location = "https://lander.breakmates.com";
    }
    if(window.location.host.split(":")[0] !== "lander.breakmates.com"){
    	window.mixpanel.init = mixpanelMock.init;
    	window.mixpanel.track = mixpanelMock.track;
    }
  	window.mixpanel.track("Hit-Load-Balancer");
	}

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
