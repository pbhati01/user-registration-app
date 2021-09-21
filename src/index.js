import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/storeSetup';
import Root from './components/Root';
import './index.css';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));