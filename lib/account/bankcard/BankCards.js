'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BankCards = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ajax = require('./../ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _CardLeftPane = require('./CardLeftPane');

var _CardLeftPane2 = _interopRequireDefault(_CardLeftPane);

var _CardRightPane = require('./CardRightPane');

var _CardRightPane2 = _interopRequireDefault(_CardRightPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BankCards = exports.BankCards = _react2.default.createClass({
    displayName: 'BankCards',
    getInitialState: function getInitialState() {
        return {
            headIcon: this.props.headIcon,
            username: this.props.username,
            depositCardNum: 0,
            creditCardNum: 0
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        (0, _ajax2.default)(this.props.api, '', 'GET', 2000, function (data) {
            _this.setState(data);
        }, function (err) {
            console.log(err.toString());
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_CardLeftPane2.default, { headIcon: this.state.headIcon, username: this.state.username, depositCardNum: this.state.depositCardNum, creditCardNum: this.state.creditCardNum }),
            _react2.default.createElement(_CardRightPane2.default, null)
        );
    }
});