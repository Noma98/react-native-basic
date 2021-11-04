/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';

class App extends Component{
  state={
    appName:'My fist App'
  }
  render(){
    return(
      <View style={styles.mainView}
        onPress={()=>alert("hohoho")}
      >
        {/* <Header name={this.state.appName}/> */}
        <Text 
        style={styles.mainText}
        onPress={()=>alert("hihihi")}
        >
          Hello world!
        </Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  mainView:{
    backgroundColor:'white',
    flex:1,
    paddingTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  subView:{
    backgroundColor:'yellow',
    marginBottom:10,
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
    fontSize:20,
    fontWeight:'normal',
    color:'red',
    padding:20
  }
})
export default App;