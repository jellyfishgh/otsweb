'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeadInfo = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadInfo = exports.HeadInfo = _react2.default.createClass({
    displayName: 'HeadInfo',
    getInitinalState: function getInitinalState() {
        return {
            username: this.props.username
        };
    },
    render: function render() {
        var headStyle = {
            backgroundImage: 'url(' + this.props.headIcon + ')'
        };
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { style: headStyle }),
            _react2.default.createElement(
                'div',
                null,
                '\u60A8\u597D\uFF0C',
                this.state.username
            ),
            _react2.default.createElement(
                'div',
                null,
                '\u6B22\u8FCE\u6765\u5230\u82B1\u751F\u7406\u8D22'
            )
        );
    }
});