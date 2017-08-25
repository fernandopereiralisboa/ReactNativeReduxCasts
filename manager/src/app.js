import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

import firebaseConfig from '../firebase.config.json';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: firebaseConfig.apiKey,
            authDomain: firebaseConfig.authDomain,
            databaseURL: firebaseConfig.databaseURL,
            projectId: firebaseConfig.projectId,
            storageBucket: firebaseConfig.storageBucket,
            messagingSenderId: firebaseConfig.messagingSenderId
        };
        
        firebase.initializeApp(config);
    }
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;
