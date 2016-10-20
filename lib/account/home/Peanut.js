'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Peanut = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeanutBaby = _react2.default.createClass({
    displayName: 'PeanutBaby',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                '\u82B1\u751F\u5B9D'
            ),
            _react2.default.createElement(
                'div',
                null,
                this.props.num
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    null,
                    '\u5145\u503C'
                ),
                _react2.default.createElement(
                    'button',
                    null,
                    '\u53D6\u73B0'
                ),
                _react2.default.createElement(
                    'button',
                    null,
                    '\u4EA4\u6613\u67E5\u8BE2'
                )
            )
        );
    }
});

var YesterdayIn = _react2.default.createClass({
    displayName: 'YesterdayIn',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                '\u6628\u65E5\u6536\u76CA'
            ),
            _react2.default.createElement(
                'div',
                null,
                this.props.yesterdayIn
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    '\u7D2F\u8BA1\u6536\u76CA\uFF1A'
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.alIn
                ),
                _react2.default.createElement(
                    'button',
                    null,
                    '[ \u4EA4\u6613\u67E5\u8BE2 ]'
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    '\u4E03\u65E5\u5E74\u5316\u6536\u76CA'
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.rate
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.yesterday
                )
            )
        );
    }
});

var Peanut = exports.Peanut = _react2.default.createClass({
    displayName: 'Peanut',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(PeanutBaby, { num: this.props.peanut.num }),
            _react2.default.createElement(YesterdayIn, { 'in': this.props.peanut.yesterdayIn, allIn: this.props.peanut.allIn, rate: this.props.peanut.rate, yesterday: this.props.peanut.yesterday })
        );
    }
});