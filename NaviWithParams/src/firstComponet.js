import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar
} from 'react-native';

import SecondComponet from './SecondComponet'

export default class FirstComponet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id:'123',
      userName: null
    }
  }
  _ClickBtn() {
    const {navigator} = this.props;
    let _this = this;
    console.log('1111111:'+this.state.userName);
    if(this.props.navigator){
        navigator.push({
          component: SecondComponet,
          params:{
            id:'123',
            papa:'caowp',
            getUserName:function(userName){
              _this.setState({
                userName:userName
              });
            }
            }
          }
        )
    }
  }

  render(){
    return(
      <View  style={styles.view}>
        <StatusBar backgroundColor="blue"
         barStyle="light-content"/>
        <View style={styles.view1}>
          <TouchableOpacity style={styles.button} onPress={this._ClickBtn.bind(this)}>
            <Text>
              点击我跳转
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'red'
  },
  view1:{
    height:40,
    width:Dimensions.get('window').width,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'yellow'
  },
  button:{
    flex:1,
    backgroundColor: 'purple',
    justifyContent:'center',
    alignItems:'center'
  }

});
