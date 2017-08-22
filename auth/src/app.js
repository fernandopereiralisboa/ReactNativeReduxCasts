import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Firebase from 'firebase'
import FirebaseConfig from '../firebase.config.json'

import LoginForm from './components/loginForm'
import { Header, Button, Spinner, CardSection } from './components/common'

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        Firebase.initializeApp({
            apiKey: FirebaseConfig.apiKey,
            authDomain: FirebaseConfig.authDomain,
            databaseURL: FirebaseConfig.databaseURL,
            projectId: FirebaseConfig.projectId,
            storageBucket: FirebaseConfig.storageBucket,
            messagingSenderId: FirebaseConfig.messagingSenderId
        })

        Firebase.auth().onAuthStateChanged( (user) => {
            if(user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => Firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                ) 
            case false:
                return <LoginForm />
            case null:
                return (
                    <CardSection>
                        <Spinner />
                    </CardSection>
                )
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App