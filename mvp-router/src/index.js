import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import Dashboard from './components/Dashboard/Dashboard';
import SuggestPage from './components/SuggestPage/SuggestPage';
import TinderPage from './components/TinderPage/TinderPage';
import PluginPage from './components/PluginPage/PluginPage';

render((
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<Route path="/tinder" component={TinderPage} />
			<Route path="/plugin" component={PluginPage} />
			<Route path="/dashboard" component={Dashboard} />
			<IndexRoute component={SuggestPage} />
		</Route>
	</Router>
), document.getElementById('root'));