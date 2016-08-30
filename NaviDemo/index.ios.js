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
  Navigator,

} from 'react-native';

import FirstPageVC from "./src/FirstPageComponet/FirstPageVC"


export default class NaviDemo extends React.Component {
  render() {
    let defaultName = 'FirstPageVC';
    let defaultComponent = FirstPageVC;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          //return Navigator.SceneConfigs.VerticalDownSwipeJump;
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }}
        renderScene={(route, navigator) => {

          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }} />
    );
  }
}



AppRegistry.registerComponent('NaviDemo', () => NaviDemo);
