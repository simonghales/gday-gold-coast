import React from 'react';
import ReactDOM from 'react-dom';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
} from 'react-router-dom';
import './styles/core.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';

ReactDOM.render(
  <Router>
    <App/>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
