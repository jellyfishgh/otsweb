'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RightPaneInfo = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RightPaneInfoTop = require('RightPaneInfoTop');

var _RightPaneInfoTop2 = _interopRequireDefault(_RightPaneInfoTop);

var _RightPaneInfoDown = require('RightPaneInfoDown');

var _RightPaneInfoDown2 = _interopRequireDefault(_RightPaneInfoDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightPaneInfo = exports.RightPaneInfo = _react2.default.createClass({
    displayName: 'RightPaneInfo',
    getInitialState: function getInitialState() {
        return {
            balance: this.props.balance,
            limitValue: this.props.limitValue,
            current: 1,
            all: 1
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_RightPaneInfoTop2.default, { balance: this.state.balance, limitValue: this.props.limitValue }),
            _react2.default.createElement(_RightPaneInfoDown2.default, { current: this.state.current, all: this.state.all })
        );
    }
});