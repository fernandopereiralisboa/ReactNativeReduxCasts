import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import firebase from 'firebase'

import firebaseConfig from '../firebase.config.json'

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
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        HELLO!
                    </Text>
                </View>
            </Provider>
        )
    }
}

export default App
