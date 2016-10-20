'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardRightPane = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RightPaneTabs = require('./RightPaneTabs');

var _RightPaneTabs2 = _interopRequireDefault(_RightPaneTabs);

var _RightPaneInfo = require('./RightPaneInfo');

var _RightPaneInfo2 = _interopRequireDefault(_RightPaneInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardRightPane = exports.CardRightPane = _react2.default.createClass({
    displayName: 'CardRightPane',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_RightPaneTabs2.default, { cardType: this.props.cardType, bankInfos: this.props.bankInfos }),
            _react2.default.createElement(_RightPaneInfo2.default, null)
        );
    }
});