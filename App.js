
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'
import Router from './src/Router';


class App extends Component{

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDJo8cG7TeM3CmBJjtoZx9n6LVzeYA-QRI",
      authDomain: "test-manager-2a9eb.firebaseapp.com",
      databaseURL: "https://test-manager-2a9eb.firebaseio.com",
      projectId: "test-manager-2a9eb",
      storageBucket: "test-manager-2a9eb.appspot.com",
      messagingSenderId: "679536484946"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App
