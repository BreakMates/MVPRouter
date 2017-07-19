import React, { Component } from 'react';
import './App.css';

class App extends Component {

	componentWillMount() {
		var MixpanelMock = (function() {
      function MixpanelMock() {
        this.init = function() {
          console.log("mixpanel.init", arguments);
        }
        this.track = function() {
          console.log("mixpanel.track", arguments);
        }
      }

      return MixpanelMock;

    })();

    if(window.location.host.split(":")[0] !== "localhost" && window.location.protocol !== "https:"){
      window.location = "https://lander.breakmates.com";
    }
    if(window.location.host.split(":")[0] !== "lander.breakmates.com"){
      window.mixpanel = new MixpanelMock();
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
