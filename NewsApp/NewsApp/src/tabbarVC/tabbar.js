import React , {Component} from 'React';
import{
  TabBarIOS
}from 'react-native';

export default class Tabbar extends Component {

  render(){
    return(
      <TabBarIOS unselectedTintColor = 'yellow'
                 tintColor = 'white'
                 barTintColor = 'darkslateblue'
                 >
                 <TabBarIOS.Item title = '首页'
                                 systemIcon = 'history'>

                 </TabBarIOS.Item>
                 <TabBarIOS.Item title = '我的'
                                 systemIcon = 'More'>

                 </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
