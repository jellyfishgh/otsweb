'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RightPaneTabs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BankCover = require('./BankCover');

var _BankCover2 = _interopRequireDefault(_BankCover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightPaneTabs = exports.RightPaneTabs = _react2.default.createClass({
    displayName: 'RightPaneTabs',
    getInitialState: function getInitialState() {
        return {
            type: this.props.cardType,
            bankInfos: this.props.bankInfos
        };
    },
    render: function render() {
        var bankCovers = this.state.bankInfos.map(function (bank) {
            return _react2.default.createElement(_BankCover2.default, { logo: bank.logo, name: bank.name, type: bank.type, cardId: bank.cardId, level: bank.level, isDefault: bank.isDefault });
        });
        var btnValue = this.state.type ? '+ 添加储蓄卡' : '+ 添加信用卡';
        return _react2.default.createElement(
            'div',
            null,
            bankCovers,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    null,
                    btnValue
                )
            )
        );
    }
});