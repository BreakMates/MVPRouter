import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var MixpanelMock = (function() {
  function MixpanelMock() {
    this.init = function() {
      console.log("mixpanel.init", arguments);
    }
    this.track = function() {
      console.log("mixpanel.track", arguments);
    }
  }

  return MixpanelMock;

})();

it('renders without crashing', () => {
	window.mixpanel = new MixpanelMock();
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});
