import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'

const store = createStore(rootReducer)

const WithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
const WithRedux = () => (
    <Provider store={store}>
        <WithRouter />
    </Provider>
)

ReactDOM.render(<WithRedux />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
