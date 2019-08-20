import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import './app/langs';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
