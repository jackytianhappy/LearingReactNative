'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

// import SecondComponet from 'SecondComponet'

var FirstComponet = (function (_React$Component) {
  _inherits(FirstComponet, _React$Component);

  function FirstComponet(props) {
    _classCallCheck(this, FirstComponet);

    _get(Object.getPrototypeOf(FirstComponet.prototype), 'constructor', this).call(this, props);
  }

  _createClass(FirstComponet, [{
    key: '_ClickBtn',
    value: function _ClickBtn() {
      console.log(this.props);
      var navigator = this.props.navigator;

      if (this.props.navigator) {
        // navigator.push({
        //   name:'title',
        //   component: SecondComponet
        // })
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.View,
        { style: styles.view },
        _react2['default'].createElement(
          _reactNative.View,
          { style: styles.view1 },
          _react2['default'].createElement(
            _reactNative.TouchableOpacity,
            { style: styles.button, onPress: this._ClickBtn },
            _react2['default'].createElement(
              _reactNative.Text,
              null,
              '点击我进行下一页的跳转'
            )
          )
        )
      );
    }
  }]);

  return FirstComponet;
})(_react2['default'].Component);

exports['default'] = FirstComponet;

var styles = _reactNative.StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  view1: {
    height: 40,
    width: _reactNative.Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  button: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
module.exports = exports['default'];

//# sourceMappingURL=firstComponet-compiled.js.map