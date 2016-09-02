import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar
}from 'react-native';

export default class SecondComponet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id:this.props.id
    }
  }
  _ClickBtn(){
    const {navigator} = this.props;
    if (navigator) {
        if (this.props.getUserName) {
          this.props.getUserName('fsafasfsafsad');
        }
        navigator.pop();
    }
  }

  render(){
    return(
      <View style={styles.view}>
        <StatusBar/>
        <TouchableOpacity onPress={this._ClickBtn.bind(this)}>
          <Text>
            你觉得呢
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
});
