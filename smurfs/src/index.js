import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as smurfReducer } from './reducers/smurfs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({
	smurfs: smurfReducer
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
