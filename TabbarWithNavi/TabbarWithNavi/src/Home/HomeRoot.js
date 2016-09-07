import React,{Component} from 'React';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
}from 'react-native';

import SecondPage from './SecondPage';

export default class HomeRoot extends React.Component{
  constructor(props){
    super(props);
  };

  //跳转action:
  _jumpToAnOtherPage  = ()=>{
    const navigator = this.props.navigator;
    if(navigator){
        navigator.push({
            component:SecondPage,
            params:{
              VCName:'RootPage'
            }
        });
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this._jumpToAnOtherPage.bind(this)}>
          <Text>点击我跳转</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var  styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:64,
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'white'
    },
    button:{
      width:Dimensions.get('window').width,
      height:44,
      backgroundColor:'red',
      flexDirection:'row',
      justifyContent:'center',
    }
});