import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  	window.mixpanel.track("Hit-Load-Balancer");
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
