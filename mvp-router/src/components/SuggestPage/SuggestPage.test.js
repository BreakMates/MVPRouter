import React from 'react';
import ReactDOM from 'react-dom';
import SuggestPage from './SuggestPage';
import App from './../App/App';
import { Router } from 'react-router';

it('renders without crashing outside app container', () => {
	<SuggestPage />
});

it('renders without crashing inside app container', () => {
	<Router><App path="/suggest"/></Router>
});