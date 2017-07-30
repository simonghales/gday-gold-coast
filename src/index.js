import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
} from 'react-router-dom';
import './styles/core.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';

function logPageView() {
  ReactGA.set({page: window.location.pathname + window.location.search});
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <Router onUpdate={logPageView}>
    <App/>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
