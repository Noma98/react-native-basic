/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.mainView}>
        <View style={styles.subView}>
        <Text style={styles.mainText}>hello world</Text>
        </View>
        <View style={styles.subView}>
        <Text>hello world</Text>
        </View>
        <View style={styles.anotherSubView}>
        <Text style={styles.mainText}>hello world</Text>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  mainView:{
    backgroundColor:'green',
    flex:1,
    paddingTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  subView:{
    backgroundColor:'yellow',
    marginBottom:10,
    flex:1,
  },
  anotherSubView:{
    flex:2,
    backgroundColor:'yellow',
    marginBottom:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  mainText:{
    fontSize:50,
    fontWeight:'bold',
    color:'red',
    padding:20
  }
})
export default App;