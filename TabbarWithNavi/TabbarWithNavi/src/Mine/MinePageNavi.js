import React, { Component } from 'React';
import {
  Navigator,
  Text,
  StyleSheet
}from 'react-native';

import MinePageRoot from './MinePageRoot';

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


export default class HomeNavi extends React.Component {
  render(){
    return(
      <Navigator initialRoute = {{name:'HomeNavi',component:MinePageRoot}}
                 SceneConfigs = {(route) =>{
                   return Navigator.SceneConfigs.HorizontalSwipeJump;
                 }}
                 renderScene = {(route,navigator) =>{
                   let Com = route.component;
                   return <Com {...route.params} navigator= {navigator}/>
                 }}

                 navigationBar={
                   <Navigator.NavigationBar
                     routeMapper={NavigationBarRouteMapper}
                     style={styles.navBar}
                     {...this.props}
                   />
                 }

      >

      </Navigator>
    );}

};

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
    backgroundColor: 'darkslateblue',
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
