import React from 'react';
import ReactDOM from 'react-dom';
import SuggestPage from './SuggestPage';
import App from './../App/App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing outside app container', () => {
	<SuggestPage />
});

it('renders without crashing inside app container', () => {
	<BrowserRouter><App path="/suggest"/></BrowserRouter>
});