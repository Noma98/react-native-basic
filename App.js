/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {View, Button,Text, TextInput, StyleSheet, ScrollView, Image} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Screen from './assets/images/screen.jpg';

class App extends Component{
  state={
    myTextInput:'',
    alphabet:['a','b','c','d']
  }

  onChangeInput=(event)=>{
    this.setState({
      myTextInput:event
    })
  }

  onAddTextInput=(event)=>{
    this.setState(prevState=>{
      return{
        myTextInput:'',
        alphabet:[...prevState.alphabet, prevState.myTextInput]
      }
  })
}
  render(){
    return(
      <View style={styles.mainView}>
       <Image 
        source={{uri:'https://picsum.photos/seed/picsum/200/300'}}
        style={styles.image}
        onLoadEnd={()=>alert('image loaded')}
       />
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
    // justifyContent:'center'
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
    padding:20,
    margin:20,
    backgroundColor:'pink'
  },
  input:{
    width:'100%',
    backgroundColor:'#cecece',
    marginTop:20,
    fontSize:25,
    padding:10
  },
  image:{
    width:'100%',
    height:300,
    resizeMode:'contain'
  }
})
export default App;