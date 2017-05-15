import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './../Dashboard/Dashboard';
import SuggestPage from './../SuggestPage/SuggestPage';
import TinderPage from './../TinderPage/TinderPage';
import PluginPage from './../PluginPage/PluginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        	<Route path="/suggest" component={SuggestPage} />
        	<Route path="/tinder" component={TinderPage} />
        	<Route path="/plugin" component={PluginPage} />
        	<Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
