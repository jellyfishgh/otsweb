'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Home = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ajax = require('./../ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _MyAsset = require('./MyAsset');

var _MyAsset2 = _interopRequireDefault(_MyAsset);

var _Peanut = require('./Peanut');

var _Peanut2 = _interopRequireDefault(_Peanut);

var _MyInvestment = require('./MyInvestment');

var _MyInvestment2 = _interopRequireDefault(_MyInvestment);

var _MyLife = require('./MyLife');

var _MyLife2 = _interopRequireDefault(_MyLife);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = exports.Home = _react2.default.createClass({
    displayName: 'Home',

    getInitialState: function getInitialState() {
        return {
            asset: {
                username: '',
                headIcon: '',
                num: '0.00'
            },
            peanut: {
                num: '0.00',
                yesterdayIn: '0.00',
                allIn: '0.00',
                rate: '0.00%',
                yesterday: ''
            },
            investment: {
                fund: '0.00',
                specialAccount: '0.00',
                transitingFund: '0.00',
                partener: '0.00'
            }
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        (0, _ajax2.default)(this.props.api, '', 'GET', 2000, function (info) {
            _this.setState(info);
        }, function (err) {
            alert(err.toString());
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_MyAsset2.default, { asset: this.state.asset }),
            _react2.default.createElement(_Peanut2.default, { peanut: this.state.peanut }),
            _react2.default.createElement(_MyInvestment2.default, { investment: this.state.investment }),
            _react2.default.createElement(_MyLife2.default, null)
        );
    }
});