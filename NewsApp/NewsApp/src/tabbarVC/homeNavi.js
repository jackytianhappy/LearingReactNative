import React ,{Component} from 'react';
import {
  Navigator,
  Text,
  StyleSheet
} from 'react-native';

import Home from '../home/view/home.js'


var NavigationBarRouteMapper = {
LeftButton: function (route, navigator, index, navState) {
    return null;
},
RightButton: function (route, navigator, index, navState) {
    return null;
},
Title: function (route, navigator, index, navState) {
    return (
        <Text style = {styles.naviTitleText}>首页</Text>
    );
},
};


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
                navigationBar={
                              <Navigator.NavigationBar
                              title = '首页'
                              routeMapper={NavigationBarRouteMapper}
                              style={{backgroundColor:'darkslateblue',flex:1}}
                              {...this.props}/>
                              }
                 >

      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  navigationBar : {
    backgroundColor : 'darkslateblue',
    flex : 1
  },
  naviTextView :{

  },
  naviTitleText : {
    color : 'white',
    fontSize : 16,
    marginVertical : 10
  }
});
