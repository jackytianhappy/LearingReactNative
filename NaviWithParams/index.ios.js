/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View,
  Text,
  StatusBarIOS,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import FirstComponet from './src/firstComponet';

var NavigationBarRouteMapper = {
LeftButton: function (route, navigator, index, navState) {
    return null;
},
RightButton: function (route, navigator, index, navState) {
    return null;
},
Title: function (route, navigator, index, navState) {
    return (
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
            {route.title}
        </Text>
    );
},
};

export default class NaviWithParams extends React.Component {

  render(){
    let defauleName = 'FirstComponet';
    let defauleVC = FirstComponet;
    return(
      // <Text>fsdafsd</Text>

      <Navigator
      initialRoute = {{name:defauleName,component:defauleVC,title:'ceshi'}}
      SceneConfigs = {(route) => {
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      }}
      renderScene = {(route,navigator) => {
        let Com = route.component;
        return <Com {...route.params} navigator = {navigator}></Com>
      }}


      navigationBar={
      <Navigator.NavigationBar
      routeMapper={NavigationBarRouteMapper}
      style={styles.navBar}
      {...this.props}
      />
    }
      ></Navigator>
    );
  }
}


const styles = StyleSheet.create({
  returnBtn: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  container: {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#F5FCFF',
  },
  nav: {
  backgroundColor: 'yellow',
  flex: 1,
  },
  navBar: {
  backgroundColor: '#337ab7',
  },
  navBarText: {
  fontSize: 16,
  marginVertical: 10,
  },
  navBarTitleText: {
  color: 'blue',
  fontWeight: '500',
  marginVertical: 9,
  },
  navBarLeftButton: {
  paddingLeft: 10,
  },
  navBarRightButton: {
  paddingRight: 10,
  },
  navBarButtonText: {
  color: 'blue',
  },
});


AppRegistry.registerComponent('NaviWithParams', () => NaviWithParams);
