import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as smurfReducer } from './reducers/smurfs';

const reducers = combineReducers({
	smurfs: smurfReducer
});

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
