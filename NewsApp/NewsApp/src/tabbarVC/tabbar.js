import React , {Component} from 'React';
import{
  TabBarIOS,
  View
}from 'react-native';

import HomeNavi from './homeNavi.js'

export default class Tabbar extends Component {
  constructor(props){
    super(props);
    this.state = {selectedTab : '首页'};
  }


  render(){
    return(
      <TabBarIOS unselectedTintColor = 'yellow'
                 tintColor = 'white'
                 barTintColor = 'darkslateblue'
                 >
                 <TabBarIOS.Item title = '首页'
                                //  systemIcon = 'history'
                                 selected = {this.state.selectedTab === '首页'}
                                 onPress = {()=>{
                                   this.setState({
                                     selectedTab : '首页'
                                   });
                                 }}>
                                 <HomeNavi></HomeNavi>
                 </TabBarIOS.Item>
                 <TabBarIOS.Item title = '我的'
                                //  systemIcon = 'contacts'
                                 selected = {this.state.selectedTab === '我的'}
                                 onPress = {()=>{
                                   this.setState({
                                     selectedTab : '我的'
                                   });
                                 }}>
                                <View></View>
                 </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
