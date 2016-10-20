'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupProductLineType = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupProductLineType = exports.GroupProductLineType = _react2.default.createClass({
    displayName: 'GroupProductLineType',
    render: function render() {
        var typeLis = this.props.types.map(function (type) {
            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    { href: type.url, target: '_blank', title: type.name },
                    type.name
                )
            );
        });
        if (this.props.name) {
            return _react2.default.createElement(
                'dl',
                null,
                _react2.default.createElement(
                    'dt',
                    null,
                    this.props.name
                ),
                _react2.default.createElement(
                    'dd',
                    null,
                    _react2.default.createElement(
                        'ul',
                        null,
                        typeLis
                    )
                )
            );
        } else {
            return _react2.default.createElement(
                'dl',
                null,
                _react2.default.createElement(
                    'dd',
                    null,
                    _react2.default.createElement(
                        'ul',
                        null,
                        typeLis
                    )
                )
            );
        }
    }
});