'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentBox = _react2.default.createClass({
    displayName: 'CommentBox',

    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'commentBox' },
            'Hello World!'
        );
    }
});
(0, _reactDom.render)(_react2.default.createElement(CommentBox, null), document.getElementById('container'));