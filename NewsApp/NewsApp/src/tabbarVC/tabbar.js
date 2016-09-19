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

      </TabBarIOS>
    );
  }
}
