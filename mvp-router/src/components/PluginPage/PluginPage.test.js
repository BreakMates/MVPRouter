import React from 'react';
import ReactDOM from 'react-dom';
import PluginPage from './PluginPage';
import App from './../App/App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing outside app container', () => {
	<PluginPage />
});

it('renders without crashing inside app container', () => {
	<BrowserRouter><App path="/plugin"/></BrowserRouter>
});