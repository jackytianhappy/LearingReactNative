import React, {Component} from 'React';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

export default class SecondPage extends React.Component{

  constructor(props){
    super(props);
    console.log('这边输出具体信息:'+this.props.VCName);
    ;
  }

  _returnBack = ()=>{
      const {navigator} = this.props;
      if (navigator){
        if (this.props.getReturnParam) {
          this.props.getReturnParam('返回了');
        }
        navigator.pop();
      }
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this._returnBack.bind(this)}>
          <Text>点击我进行返回页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const  styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'yellow'
  },
  button:{
    marginTop:64,
    width:Dimensions.get('window').width,
    height:44,
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'center',
  }
});