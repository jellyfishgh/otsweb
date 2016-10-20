'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyInvestment = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvestItem = _react2.default.createClass({
    displayName: 'InvestItem',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: this.props.icon }),
            _react2.default.createElement(
                'span',
                null,
                this.props.name
            ),
            _react2.default.createElement(
                'span',
                null,
                this.props.num
            ),
            _react2.default.createElement(
                'button',
                null,
                this.props.btnValue
            )
        );
    }
});

var MyInvestment = exports.MyInvestment = _react2.default.createClass({
    displayName: 'MyInvestment',
    getInitialState: function getInitialState() {
        return {
            items: [{
                icon: '/img/',
                name: '基金：',
                num: this.props.investment.fund,
                btnValue: '[ 立即购买 ]'
            }, {
                icon: '/img/',
                name: '专户：',
                num: this.props.investment.fund,
                btnValue: '[ 立即购买 ]'
            }, {
                icon: '/img/',
                name: '在途资金：',
                num: this.props.investment.fund,
                btnValue: '[ 查看 ]'
            }, {
                icon: '/img/',
                name: '合作伙伴：',
                num: this.props.investment.fund,
                btnValue: '[ 查看 ]'
            }]
        };
    },
    render: function render() {
        var investItems = this.state.items.map(function (item) {
            return _react2.default.createElement(InvestItem, { icon: item.icon, name: item.name, btnValue: item.btnValue });
        });
        return _react2.default.createElement(
            'div',
            null,
            investItems
        );
    }
});