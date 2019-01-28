import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import firebaseConfig from './config/firebaseConfig'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig)
    )
)

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
