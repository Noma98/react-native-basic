
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, StyleSheet,TouchableOpacity} from 'react-native';
 
 const NumList=({num,onDelete})=>{
   return(
     num.map((item,index)=>(
    <TouchableOpacity 
    key={index} 
    style={styles.numList}
    onPress={()=>onDelete(index)}
    >
      <Text >{item}</Text>
    </TouchableOpacity>
     ))
   )
 }

 const styles=StyleSheet.create({
  numList:{
    backgroundColor:'#cecece',
    alignItems:'center',
    width:'100%',
    padding:5,
    marginTop:5
  }
})
 export default NumList;