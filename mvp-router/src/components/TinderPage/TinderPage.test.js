import React from 'react';
import ReactDOM from 'react-dom';
import TinderPage from './TinderPage';
import App from './../App/App';
import { Router } from 'react-router';

it('renders without crashing outside app container', () => {
	<TinderPage />
});

it('renders without crashing inside app container', () => {
	<Router><App path="/tinder"/></Router>
});