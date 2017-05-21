import React, { Component } from 'react';
import MainApp from './src/MainApp';
import { AppRegistry } from 'react-native';

class sample extends Component {
  render(){
    return (
      <MainApp />
    )
  }
}

AppRegistry.registerComponent('sample', ()=> sample)
