import React,{Component} from 'React';
import {
  View,
  StyleSheet
}from 'react-native';

export default class HomeRoot extends React.component{

  render(){
    return(
      <View style={styles.container}></View>
    );
  }
}

var  styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'red'
    }

});