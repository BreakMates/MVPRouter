import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import App from './../App/App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing outside app container', () => {
	<Dashboard />
});

it('renders without crashing inside app container', () => {
	<BrowserRouter><App path="/"/></BrowserRouter>
});