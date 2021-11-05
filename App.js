/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {View, Button,Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';

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
        <Picker/>
        {/* <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          autoCapitalize={'none'}
          editable={true}
        />
        <Button 
          title='Add text input'
          onPress={this.onAddTextInput}
        /> 
          <ScrollView style={{width:'100%'}}>
          {this.state.alphabet.map((value, index)=>
            <Text 
             style={styles.mainText}
             key={index}>
               {value}
               </Text>
          )}
        </ScrollView> */}
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
  }
})
export default App;