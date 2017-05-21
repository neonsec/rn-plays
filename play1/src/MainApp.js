
import React from 'react';
import {Text, View} from 'react-native';

const MainApp = ()=>{
  const name = '01 - Hey this is my life'
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}></View>
      <Text style={styles.title}>
        <Text style={styles.subtitle}>Playing:</Text> {name}
      </Text>
    </View>
  )
}

const styles = {
  container:{
    backgroundColor: '#e67e22',
    marginTop: 100,
    margin: 10
  },
  innerContainer: {
    backgroundColor: '#d34500',
    height: 50,
    width: 150,
  },
  title:{
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 15,
    left: 10
  },
    subtitle: {
      fontWeight: 'bold'
    }


}
module.exports = MainApp;
