// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// RENDER 
ReactDOM.render(<App />, document.getElementById('root'));
// REGISTER SERVICE WORKER
registerServiceWorker();