import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCfIzPyzD5cbL-RtNFHojulu9soXHX2u_8',
      authDomain: 'auth-18afc.firebaseapp.com',
      databaseURL: 'https://auth-18afc.firebaseio.com',
      projectId: 'auth-18afc',
      storageBucket: 'auth-18afc.appspot.com',
      messagingSenderId: '736689248806'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
