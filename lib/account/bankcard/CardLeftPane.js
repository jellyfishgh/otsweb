'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardLeftPane = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeadInfo = require('./HeadInfo');

var _HeadInfo2 = _interopRequireDefault(_HeadInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardInfo = _react2.default.createClass({
    displayName: 'CardInfo',
    getInitialState: function getInitialState() {
        return {
            depositCardNum: this.props.depositCardNum,
            creditCardNum: this.props.creditCardNum
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                '\u50A8\u84C4\u5361(this.state.depositCardNum)'
            ),
            _react2.default.createElement(
                'div',
                null,
                '\u4FE1\u7528\u5361(this.state.creditCardNum)'
            )
        );
    }
});

var CardLeftPane = exports.CardLeftPane = _react2.default.createClass({
    displayName: 'CardLeftPane',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_HeadInfo2.default, { headIcon: this.props.headIcon, username: this.props.username }),
            _react2.default.createElement(CardInfo, { depositCardNum: this.props.depositCardNum, creditCardNum: this.props.creditCardNum })
        );
    }
});