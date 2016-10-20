'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyLife = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LifeItem = _react2.default.createClass({
    displayName: 'LifeItem',
    render: function render() {
        var quan = this.props.hasQuan ? _react2.default.createElement('img', { src: '' }) : '';
        return _react2.default.createElement(
            'a',
            { href: this.props.url },
            _react2.default.createElement('img', { src: this.props.icon }),
            _react2.default.createElement(
                'div',
                null,
                this.props.name
            ),
            _react2.default.createElement(
                'span',
                null,
                quan
            )
        );
    }
});

var MyLife = exports.MyLife = _react2.default.createClass({
    displayName: 'MyLife',
    getInitialState: function getInitialState() {
        return { items: [{
                url: '/servlet/life/IndexAction',
                name: '信用卡还款',
                hasQuan: true,
                icon: '/img/Coupons_icon_xin.png'
            }, {
                url: '/servlet/sdm/IndexAction',
                name: '水电煤缴费',
                hasQuan: true,
                icon: '/img/Coupons_icon_sdm.png'
            }, {
                url: '/servlet/servlet/hsb/AutoRecharge',
                name: '工资理财',
                hasQuan: false,
                icon: '/img/Coupons_icon_chong.png'
            }, {
                url: '/servlet/hsb/AppCashAction',
                name: '预约还贷',
                hasQuan: false,
                icon: '/img/Coupons_icon_qu.png'
            }] };
    },
    render: function render() {
        var lifeItems = this.state.items.map(function (item) {
            return _react2.default.createElement(LifeItem, { url: item.url, name: item.name, icon: item.icon, hasQuan: item.hasQuan });
        });
        return _react2.default.createElement(
            'div',
            null,
            lifeItems
        );
    }
});