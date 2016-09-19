import React ,{Component} from 'react';
import {
  Navigator
} from 'react-native';

import Home from '../home/home.js'

export default class HomeNavi extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Navigator initialRoute = {{name:'home',componet:Home}}
                 configureScene = {(route)=>{
                   return Navigator.SceneConfigs.VerticalDownSwipeJump;
                 }}
                 renderScene = {(route,navigator) => {
                   let Com = route.componet;
                   return <Com {...route.params} navigator = {navigator}></Com>
                 }}

                 
                 >

      </Navigator>
    );
  }

}
