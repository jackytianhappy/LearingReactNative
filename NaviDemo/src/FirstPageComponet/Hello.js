/**
 * Created by Jacky on 16/8/29.
 */
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import previousPage from './FirstPageVC'

export  default  class Hello extends Component{
  constructor(props){
    super(props);
  }

  Click = ()=>{
    const {navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
    alert(this.props.test);
  }

  render(){

    return(
      <View style={{backgroundColor:'red',height:200,width:200} }>
        <TouchableOpacity style={styles.button} onPress={this.Click}>
          <Text>
            点击进行返回
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  button:{
    flex:1,
    width:200,
    height:20,
    justifyContent:'center'
  }

});