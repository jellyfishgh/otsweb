'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Navigator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cover = require('Cover');

var _Cover2 = _interopRequireDefault(_Cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigator = exports.Navigator = _react2.default.createClass({
    displayName: 'Navigator',
    render: function render() {
        return _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                'a',
                { href: this.props.url },
                this.props.name
            )
        );
    }
});