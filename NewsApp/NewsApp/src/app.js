//This is the entrance of the app

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Tabbar from './tabbarVC/tabbar.js';

export default class app extends Component {
  render() {
    return (
      <Tabbar/>
    );
  }
}
{}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

});
