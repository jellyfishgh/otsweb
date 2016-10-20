'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BankCover = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BankLevel = _react2.default.createClass({
    displayName: 'BankLevel',
    render: function render() {
        var stars = this.props.level.map(function () {
            return _react2.default.createElement('img', { src: '' });
        });
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                null,
                '\u7B49\u7EA7\uFF1A'
            ),
            stars
        );
    }
});

var BankCover = exports.BankCover = _react2.default.createClass({
    displayName: 'BankCover',
    getInitialState: function getInitialState() {
        return {
            logo: this.props.logo,
            name: this.props.name,
            type: this.props.type ? '(储蓄卡)' : '(信用卡)',
            cardId: this.props.cardId,
            level: this.props.level,
            isDefault: this.props.isDefault
        };
    },
    render: function render() {
        var defaultView = this.state.isDefault ? _react2.default.createElement('img', { src: '' }) : '';
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('img', { src: this.state.logo }),
                _react2.default.createElement(
                    'span',
                    null,
                    this.state.name
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    this.state.type
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    '\u5361\u53F7\uFF1A'
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    '$',
                    this.state.cardId
                )
            ),
            _react2.default.createElement(BankLevel, { level: this.state.level }),
            _react2.default.createElement(
                'span',
                null,
                defaultView
            )
        );
    }
});