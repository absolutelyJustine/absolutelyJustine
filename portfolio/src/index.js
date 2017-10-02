import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


Radium(
    ReactDOM.render(<App/>, document.getElementById('root'))
);
registerServiceWorker();
