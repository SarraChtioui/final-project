import React from 'react';
import ReactDOM from 'react-dom';
//initialize redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'; //from reducers/index.js

import App from './App';
//create store
import './index.css';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

//wrap application in provider component and specify store
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById("root"));
