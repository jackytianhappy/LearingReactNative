/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import app from './src/app.js'

//前面一个参数是项目名称 后面一个参数是要初始化的组建名称
AppRegistry.registerComponent('NewsApp', () => app);
