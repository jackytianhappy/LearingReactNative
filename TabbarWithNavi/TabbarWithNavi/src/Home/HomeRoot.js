import React,{Component} from 'React';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ListView
}from 'react-native';

import SecondPage from './SecondPage';

export default class HomeRoot extends React.Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2});

    this.state={
        VCName :'RootPage',
        returnParam : null,
        //模拟数据源数据
        dataSource: ds.cloneWithRows(['王伟','任丽风','田楠','田楠','血泪','豪哥','淋雨','小韩'])

    }
  };

  //跳转action:
  _jumpToAnOtherPage  = ()=>{
    const navigator = this.props.navigator;
    let _this = this;
    if(navigator){
        navigator.push({
            component:SecondPage,
            params:{
              VCName: this.state.VCName,
              getReturnParam:function(returnParam){
                _this.setState({
                  returnParam:returnParam
                });
              }
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

        <ListView style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData)=><Text>{rowData}</Text>}  />
      </View>
    );
  }
}

var  styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:64,
      flexDirection:'column',
      justifyContent:'center',
      backgroundColor:'white'
    },
    button:{
      width:Dimensions.get('window').width,
      height:44,
      backgroundColor:'red',
      flexDirection:'row',
      justifyContent:'center',
    },
    listView:{
      marginTop:0
    }
});