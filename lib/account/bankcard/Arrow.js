'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Arrow = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = exports.Arrow = _react2.default.createClass({
    displayName: 'Arrow',
    getInitialState: function getInitialState() {
        return {
            current: 1,
            all: 1
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: '' }),
            _react2.default.createElement(
                'span',
                null,
                this.props.current,
                '/',
                this.props.all
            ),
            _react2.default.createElement('img', { src: '' })
        );
    }
});