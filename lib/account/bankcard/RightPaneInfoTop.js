'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RightPaneInfoTop = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BankBalance = _react2.default.createClass({
    displayName: 'BankBalance',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                '\u672C\u5361\u5173\u8054\u8D44\u4EA7\u4F59\u989D\uFF1A'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.balance
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    '\u5143'
                ),
                _react2.default.createElement(
                    'button',
                    null,
                    '[ \u660E\u7EC6 ]'
                )
            )
        );
    }
});

var DetailItem = _react2.default.createClass({
    displayName: 'DetailItem',
    render: function render() {
        if (this.props.extra) {
            var opeView = this.props.isActive ? _react2.default.createElement(
                'button',
                null,
                '[ \u65B0\u589E ]'
            ) : _react2.default.createElement(
                'span',
                null,
                '[ \u656C\u8BF7\u671F\u5F85 ]'
            );
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('img', { src: this.props.icon }),
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.desc
                ),
                opeView
            );
        } else {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('img', { src: this.props.icon }),
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.desc
                )
            );
        }
    }
});

var CardDetails = _react2.default.createClass({
    displayName: 'CardDetails',
    getInitialState: function getInitialState() {
        return {
            items: [{
                icon: '',
                desc: '\u5145\u503C\u9650\u989D\uFF1A' + this.props.limitValue,
                extra: false
            }, {
                icon: '',
                desc: '工资理财计划：将银行卡资金定期自动归集进花生宝',
                extra: true,
                isActive: true
            }, {
                icon: '',
                desc: '自动取现计划：单笔或每月定期自动取现到银行卡',
                extra: true,
                isActive: true
            }, {
                icon: '',
                desc: '余额支付功能',
                extra: true,
                isActive: false
            }, {
                icon: '',
                desc: '跨卡取现',
                extra: true,
                isActive: false
            }]
        };
    },
    render: function render() {
        var details = this.state.items.map(function (item) {
            return _react2.default.createElement(DetailItem, { icon: item.icon, desc: item.desc, extra: item.extra });
        });
        return _react2.default.createElement(
            'div',
            null,
            details
        );
    }
});

var OpeArea = _react2.default.createClass({
    displayName: 'OpeArea',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'button',
                null,
                '\u6362\u5361'
            ),
            _react2.default.createElement(
                'button',
                null,
                '\u5220\u9664\u8BE5\u5361'
            ),
            _react2.default.createElement(
                'button',
                null,
                '\u91CD\u65B0\u7ED1\u5361'
            )
        );
    }
});

var RightPaneInfoTop = exports.RightPaneInfoTop = _react2.default.createClass({
    displayName: 'RightPaneInfoTop',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(BankBalance, { balance: this.props.balance }),
            _react2.default.createElement(CardDetails, { limitValue: this.props.limitValue }),
            _react2.default.createElement(OpeArea, null)
        );
    }
});