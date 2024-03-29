import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './comps/App';
import * as serviceWorker from './serviceWorker';
import './css/output.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
