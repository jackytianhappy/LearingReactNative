import React from 'react';
import {
  View,
  Navigator,
  TouchableOpacity,
  Text
} from 'react-native';

import Hello from "./Hello"

export default class FirstPageVC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _pressButton() {
    const { navigator } = this.props;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
    if(navigator) {
      navigator.push({
        name: 'Hello',
        component: Hello,
        params:{
          id:'nihao',
          test:'this is name'
        }
      })
    }
  }
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center',height:200}}>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>点我跳转</Text>
        </TouchableOpacity>
      </View>
    );
  }
}