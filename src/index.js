import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//1. In order to use React with Redux, we need reat-redux 
import { Provider } from 'react-redux'; //this is our glue between react and redux 

// 2. Create a redux store so that:
// 2.1 Redux exists 
// 2.2 The provider has that store 
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

// 3. We need reducers to populate the store
// 3.1 reducers go into the root reducer 
// 3.2 Make individual reducers to go into the root reducer 


// 4. Actually create the stor (2) by passing it the 
// root reducer (3) which is made up of the individual reducers 

const aPublix = createStore(rootReducer)

// Provider (1) is the component that glues react and redux together
// we hand the provider to ReactDOM.render, 
// and we hand the provider the prop of store with our Store

ReactDOM.render(
    <Provider store={aPublix}>
        <App />
    </Provider>,
    document.getElementById('root')
)