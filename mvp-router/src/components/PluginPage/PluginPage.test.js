import React from 'react';
import ReactDOM from 'react-dom';
import PluginPage from './PluginPage';
import App from './../App/App';
import { Router } from 'react-router';

it('renders without crashing outside app container', () => {
	<PluginPage />
});

it('renders without crashing inside app container', () => {
	<Router><App path="/plugin"/></Router>
});