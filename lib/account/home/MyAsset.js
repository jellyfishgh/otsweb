'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyAsset = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyAssetNum = _react2.default.createClass({
    displayName: 'MyAssetNum',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                '\u6211\u7684\u8D44\u4EA7'
            ),
            _react2.default.createElement(
                'div',
                null,
                this.props.num
            )
        );
    }
});

var MyHead = _react2.default.createClass({
    displayName: 'MyHead',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: this.props.headIcon }),
            _react2.default.createElement(
                'div',
                null,
                '\u4F60\u597D\uFF0C',
                this.props.username
            )
        );
    }
});

var Card = _react2.default.createClass({
    displayName: 'Card',
    render: function render() {
        return _react2.default.createElement(
            'a',
            { href: this.props.url, title: this.props.name },
            _react2.default.createElement('img', { src: this.props.iconUrl })
        );
    }
});
var MyCards = _react2.default.createClass({
    displayName: 'MyCards',
    getInitialState: function getInitialState() {
        return { data: [{
                name: '银行卡',
                url: '/servlet/account/bank/BankCardAction',
                iconUrl: '/img/Coupons_icon_ka.png'
            }, {
                name: '红包',
                url: '/servlet/account/activities/RedAction',
                iconUrl: 'Coupons_icon_hb.png'
            }, {
                name: '卡券',
                url: '/servlet/account/activities/CouponAction',
                iconUrl: '/img/Coupons_icon_quan.png'
            }] };
    },
    render: function render() {
        var cards = this.state.data(function (item) {
            return _react2.default.createElement(Card, { url: item.url, name: item.name, iconUrl: item.iconUrl });
        });
        return _react2.default.createElement(
            'div',
            null,
            cards
        );
    }
});

var MyAsset = exports.MyAsset = _react2.default.createClass({
    displayName: 'MyAsset',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(MyAssetNum, { num: this.props.asset.num }),
            _react2.default.createElement(MyHead, { headIcon: this.props.asset.headIcon, username: this.props.asset.username }),
            _react2.default.createElement(MyCards, null)
        );
    }
});