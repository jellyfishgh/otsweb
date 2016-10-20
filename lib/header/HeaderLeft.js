'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeaderLeft = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navigator = require('Navigator');

var _Navigator2 = _interopRequireDefault(_Navigator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderLeft = exports.HeaderLeft = _react2.default.createClass({
    displayName: 'HeaderLeft',
    render: function render() {
        return _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(_Navigator2.default, { url: 'http://www.pingan.com/', name: '\u5E73\u5B89\u9996\u9875' }),
            _react2.default.createElement(_Navigator2.default, { url: '' })
        );
    }
});