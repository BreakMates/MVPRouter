import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {

  window.mixpanel = {
      init: function() {
        console.log("mixpanel.init", arguments);
      },
      track: function() {
        console.log("mixpanel.track", arguments);
      }
    };
    
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});
