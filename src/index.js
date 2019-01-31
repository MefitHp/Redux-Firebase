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
        reactReduxFirebase(firebaseConfig, { attachAuthIsReady: true })
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

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<WithRedux />, document.getElementById('root'))
    serviceWorker.unregister()
})

