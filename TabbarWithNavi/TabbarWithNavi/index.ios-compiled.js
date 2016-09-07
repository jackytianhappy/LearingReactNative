"use strict";

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native

//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TabBarIOS
// } from 'react-native';
//
// import HomeNavi from  './src/Home/HomeNavi';
//
// class TabbarWithNavi extends Component {
//   //初始化变量
//   state = {
//     selectedTab : 'home'
//   };
//
//   _renderRooView = ()=>{
//       return(HomeNavi);
//   };
//
//   render() {
//     return (
//       <TabBarIOS
//       selectedTintColor = 'red'
//       tintColor = 'white'
//       barTintColor = 'darkslateblue'>
//
//         <TabBarIOS.Item
//         //systemIcon = 'history'
//         title = '首页'
//         selected = {this.state.selectedTab === 'home'}
//         onPress = {()=>{
//           this.setState({
//             selectedTab : 'home',
//           });
//         }}>
//           {this._renderRooView()}
//         </TabBarIOS.Item>
//
//         <TabBarIOS.Item
//           // systemIcon = 'more'
//         title = '我的'
//         selected = {this.state.selectedTab === 'mine'}
//         onPress = {()=>{
//           console.log('输出现在的信息内容');
//           this.setState({
//             selectedTab : 'mine',
//           });
//         }}
//         >
//         <View style = {styles.container}/>
//         </TabBarIOS.Item>
//
//       </TabBarIOS>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//
// });
//
// AppRegistry.registerComponent('TabbarWithNavi', () => TabbarWithNavi);

//# sourceMappingURL=index.ios-compiled.js.map