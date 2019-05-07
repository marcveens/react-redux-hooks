import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import App from './App';
import { configureStore } from './store/store';

ReactDOM.render(
    <StoreContext.Provider value={configureStore()}>
        <App />
    </StoreContext.Provider>,
    document.getElementById('root')
);