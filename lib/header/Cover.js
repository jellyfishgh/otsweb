'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cover = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GroupProductLineTypes = require('GroupProductLineTypes');

var _GroupProductLineTypes2 = _interopRequireDefault(_GroupProductLineTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cover = exports.Cover = _react2.default.createClass({
    displayName: 'Cover',
    render: function render() {
        var lineViews = this.props.lines.map(function (line) {
            return _react2.default.createElement(_GroupProductLineTypes2.default, { name: line.name, types: line.types });
        });
        return _react2.default.createElement(
            'div',
            null,
            lineViews
        );
    }
});