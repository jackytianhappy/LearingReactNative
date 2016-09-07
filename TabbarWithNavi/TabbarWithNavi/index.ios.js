/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import HomeNavi from  './src/Home/HomeNavi';
import MinePageNavi from './src/Mine/MinePageNavi';

class TabbarWithNavi extends Component {
  //初始化变量
  state = {
    selectedTab : 'home'
  };

  _renderRooView = ()=>{
      return(HomeNavi);
  };

  render() {
    return (
      <TabBarIOS
      selectedTintColor = 'red'
      tintColor = 'white'
      barTintColor = 'darkslateblue'>

        <TabBarIOS.Item
        systemIcon = 'history'
          //icon = {require('./imgSrc/icon_home.png')}
        title = '首页'
        selected = {this.state.selectedTab === 'home'}
        onPress = {()=>{
          this.setState({
            selectedTab : 'home',
          });
        }}>
         <HomeNavi/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
           systemIcon = 'more'
          //icon = {require('./imgSrc/icon_me.png')}
        title = '我的'
        selected = {this.state.selectedTab === 'mine'}
        onPress = {()=>{
          console.log('输出现在的信息内容');
          this.setState({
            selectedTab : 'mine',
          });
        }}
        >
        <MinePageNavi/>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('TabbarWithNavi', () => TabbarWithNavi);

