'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tutorial1-raw.js
var CommentBox = _react2.default.createClass({
    displayName: 'CommentBox',
    render: function render() {
        return _react2.default.createElement('div', { className: 'commentBox' }, 'Hello, world! I am a CommentBox.');
    }
});
_reactDom2.default.render(_react2.default.createElement(CommentBox, null), document.getElementById('container'));