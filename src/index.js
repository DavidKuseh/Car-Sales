import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import * as reducer from './state/reducers';
import 'bulma/css/bulma.css';
import './styles.scss';

const mainReducer = combineReducers({
	state: reducer.carReducer
});

export const store = createStore(mainReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
