'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RightPaneInfoDown = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Arrow = require('./Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightPaneInfoDown = exports.RightPaneInfoDown = _react2.default.createClass({
    displayName: 'RightPaneInfoDown',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Arrow2.default, { current: this.props.current, all: this.props.all })
        );
    }
});