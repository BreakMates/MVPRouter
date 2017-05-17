import React from 'react';
import ReactDOM from 'react-dom';
import TinderPage from './TinderPage';
import App from './../App/App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing outside app container', () => {
	<TinderPage />
});

it('renders without crashing inside app container', () => {
	<BrowserRouter><App path="/tinder"/></BrowserRouter>
});