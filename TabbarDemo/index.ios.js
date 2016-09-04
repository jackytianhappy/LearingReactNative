import React,{Component} from 'react';
import {
  TabBarIOS,
  TabBarItem,
  View,
  Text,
  AppRegistry,
  StyleSheet
} from 'react-native';
//返回视图
class TabbarDemo extends React.Component{

  state = {
    selectedTab : 'contacts'
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };


  render(){
      return(
        <TabBarIOS
          unselectedTintColor = 'white'
          tintColor = 'yellow'
          barTintColor = 'darkslateblue'>
            <TabBarIOS.Item
              title = 'contacts'
              systemIcon = 'contacts'
              selected = {this.state.selectedTab === 'contacts'}
              onPress ={()=>{
                this.setState({
                  selectedTab : 'contacts'
                });
              }}>
              {this._renderContent('#414A8C', 'Blue Tab')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title = 'downloads'
              systemIcon = 'downloads'
              selected = {this.state.selectedTab === 'downloads'}
              onPress ={()=>{
                this.setState({
                  selectedTab : 'downloads'
                });
              }}>
              {this._renderContent('#21551C', 'Green Tab')}
            </TabBarIOS.Item>
        </TabBarIOS>
      );
  }
}


var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});


AppRegistry.registerComponent('TabbarDemo',()=> TabbarDemo);
