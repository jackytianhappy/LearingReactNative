import React, { Component } from 'React';
import {
  Navigator,
}from 'react-native';

import HomeRoot from './HomeRoot'

export default class HomeNavi extends React.Component {


  render(){
    return(
      <Navigator
      initialRoute = {{name:'HomeNavi',component:''}}
      configureScene = {(route) =>{
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      }}
      renderScene = {(route,navigator) =>{
        let com = route.component;
        return <Component {...route.params} navigator= {navigator}/>
      }}
      >

      </Navigator>
    );}

}
