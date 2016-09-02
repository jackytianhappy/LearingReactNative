/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _srcFirstComponet = require('./src/firstComponet');

var _srcFirstComponet2 = _interopRequireDefault(_srcFirstComponet);

var NaviWithParams = (function (_React$Component) {
  _inherits(NaviWithParams, _React$Component);

  function NaviWithParams() {
    _classCallCheck(this, NaviWithParams);

    _get(Object.getPrototypeOf(NaviWithParams.prototype), 'constructor', this).apply(this, arguments);
  }

  // let defaultName = 'firstComponet';
  // let first  = firstComponet;
  // return (
  //   <Navigator
  //   initialRoute = {{name:'FirstComponet',component:first}}
  //   configureScene = {(route) => {
  //       return Navigator.SceneConfigs.HorizontalSwipeJump;
  //   }}
  //   renderScene = {(route,navigator) => {
  //     let Com = route.component;
  //     return <Com {...route.params} navigator ={navigator}></Com>
  //   }}
  //   ></Navigator>
  // <Navigator
  //   initialRoute={{name:defaultName,component:firstComponet1}}
  //   configureScene={(route) => {
  //     return Navigator.SceneConfigs.HorizontalSwipeJump;
  //   }}
  //   renderScene={(route, navigator) => {
  //     let Component = route.component;
  //     return <Component {...route.params} navigator={navigator} />
  //   }}
  // >
  // </Navigator>

  _createClass(NaviWithParams, [{
    key: 'render',
    value: function render() {
      var defauleName = 'FirstComponet';
      var defauleVC = _srcFirstComponet2['default'];
      return(
        // <Text>fsdafsd</Text>
        _react2['default'].createElement(_reactNative.Navigator, {
          initialRoute: { name: defauleName, component: defauleVC },
          SceneConfigs: function (route) {
            return _reactNative.Navigator.SceneConfigs.HorizontalSwipeJump;
          },
          renderScene: function (route, navigator) {
            console.log("luyou" + route);
            console.log("daohang" + navigator);
            var Com = route.component;
            return _react2['default'].createElement(Com, _extends({}, route.params, { navigator: navigator }));
          }
        })
      );
    }
  }]);

  return NaviWithParams;
})(_react2['default'].Component);

exports['default'] = NaviWithParams;
_reactNative.AppRegistry.registerComponent('NaviWithParams', function () {
  return NaviWithParams;
});
module.exports = exports['default'];

//# sourceMappingURL=index.ios-compiled.js.map