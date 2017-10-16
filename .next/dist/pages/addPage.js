'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pariyar/projects/demoProject/frontend/pages/addPage.js?entry';


var AddInfo = function (_Component) {
    (0, _inherits3.default)(AddInfo, _Component);

    function AddInfo() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AddInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddInfo.__proto__ || (0, _getPrototypeOf2.default)(AddInfo)).call.apply(_ref, [this].concat(args))), _this), _this.sendData = function (data) {
            (0, _axios2.default)({
                method: 'post',
                url: 'http://localhost:8000',
                data: data
            });
            _this.refs.fName.value = '';
            _this.refs.lName.value = '';
            _this.refs.email.value = '';
        }, _this.handleSubmit = function (e) {
            e.preventDefault();
            var data = {
                fName: _this.refs.fName.value,
                lName: _this.refs.lName.value,
                email: _this.refs.email.value
            };

            _this.sendData(data);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(AddInfo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Back')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }), _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', { htmlFor: 'fName', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'First name'), _react2.default.createElement('input', { type: 'text', id: 'fName', ref: 'fName', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('label', { htmlFor: 'lName', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Last name'), _react2.default.createElement('input', { type: 'text', id: 'lName', ref: 'lName', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement('label', { htmlFor: 'email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Email'), _react2.default.createElement('input', { type: 'text', id: 'email', ref: 'email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement('input', { type: 'submit', value: 'Save & Add more', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }), _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('div', { style: { width: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('a', { type: 'button', onClick: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('button', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Save')))));
        }
    }]);

    return AddInfo;
}(_react.Component);

exports.default = AddInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkZFBhZ2UuanMiXSwibmFtZXMiOlsiTGluayIsImF4aW9zIiwiUmVhY3QiLCJDb21wb25lbnQiLCJBZGRJbmZvIiwic2VuZERhdGEiLCJkYXRhIiwibWV0aG9kIiwidXJsIiwicmVmcyIsImZOYW1lIiwidmFsdWUiLCJsTmFtZSIsImVtYWlsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7Ozs7OztJQUlLLEE7Ozs7Ozs7Ozs7Ozs7O2tOLEFBR2pCLFdBQVcsVUFBQSxBQUFDLE1BQVMsQUFDakI7O3dCQUFNLEFBQ00sQUFDUjtxQkFGRSxBQUVHLEFBQ0w7c0JBSEosQUFBTSxBQUtOO0FBTE0sQUFDRjtrQkFJSixBQUFLLEtBQUwsQUFBVSxNQUFWLEFBQWdCLFFBQWhCLEFBQXdCLEFBQ3hCO2tCQUFBLEFBQUssS0FBTCxBQUFVLE1BQVYsQUFBZ0IsUUFBaEIsQUFBd0IsQUFDeEI7a0JBQUEsQUFBSyxLQUFMLEFBQVUsTUFBVixBQUFnQixRQUFoQixBQUF3QixBQUUzQjtBLGlCQUVELEEsZUFBZSxVQUFBLEFBQUMsR0FBTSxBQUNsQjtjQUFBLEFBQUUsQUFDRjtnQkFBSTt1QkFDTyxNQUFBLEFBQUssS0FBTCxBQUFVLE1BRFYsQUFDZ0IsQUFDdkI7dUJBQU8sTUFBQSxBQUFLLEtBQUwsQUFBVSxNQUZWLEFBRWdCLEFBQ3ZCO3VCQUFPLE1BQUEsQUFBSyxLQUFMLEFBQVUsTUFIckIsQUFBVyxBQUdnQixBQUczQjtBQU5XLEFBQ1A7O2tCQUtKLEFBQUssU0FBTCxBQUFjLEFBR2pCO0E7Ozs7O2lDQUdPLEFBQ0o7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUFlO0FBQWY7K0JBQWUsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRGYsQUFDQSxBQUFlLEFBQ2Y7OzhCQUFBO2dDQUZBLEFBRUEsQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUI7OEJBQXJCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFdBQU8sU0FBUCxBQUFlOzhCQUFmO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0Esd0RBQU8sTUFBUCxBQUFZLFFBQU8sSUFBbkIsQUFBc0IsU0FBUSxLQUE5QixBQUFrQzs4QkFBbEM7Z0NBRkosQUFFSSxBQUNBO0FBREE7Ozs4QkFDQTtnQ0FISixBQUdJLEFBQU07QUFBTjtBQUFBOzs4QkFBTTtnQ0FIVixBQUdVLEFBQ047QUFETTtBQUFBLGdDQUNOLGNBQUEsV0FBTyxTQUFQLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQUpKLEFBSUksQUFDQSx1REFBTyxNQUFQLEFBQVksUUFBTyxJQUFuQixBQUFzQixTQUFRLEtBQTlCLEFBQWtDOzhCQUFsQztnQ0FMSixBQUtJLEFBQ0E7QUFEQTs7OzhCQUNBO2dDQU5KLEFBTUksQUFBTTtBQUFOO0FBQUE7OzhCQUFNO2dDQU5WLEFBTVUsQUFDTjtBQURNO0FBQUEsZ0NBQ04sY0FBQSxXQUFPLFNBQVAsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBUEosQUFPSSxBQUNBLG1EQUFPLE1BQVAsQUFBWSxRQUFPLElBQW5CLEFBQXNCLFNBQVEsS0FBOUIsQUFBa0M7OEJBQWxDO2dDQVJKLEFBUUksQUFDQTtBQURBOzs7OEJBQ0E7Z0NBVEosQUFTSSxBQUFNO0FBQU47QUFBQTs7OEJBQU07Z0NBVFYsQUFTVSxBQUVOO0FBRk07QUFBQSx5REFFQyxNQUFQLEFBQVksVUFBUyxPQUFyQixBQUEyQjs4QkFBM0I7Z0NBZEosQUFHQSxBQVdJLEFBRUo7QUFGSTs7OzhCQUVKO2dDQWhCQSxBQWdCQSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLE9BQU8sRUFBQyxPQUFiLEFBQVksQUFBTzs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxNQUFILEFBQVEsVUFBUyxTQUFTLEtBQTFCLEFBQStCOzhCQUEvQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBckJoQixBQUNJLEFBaUJBLEFBQ0ksQUFDSSxBQUNJLEFBU25COzs7OztBQTVEZ0MsQTs7a0JBQWhCLEEiLCJmaWxlIjoiYWRkUGFnZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9wYXJpeWFyL3Byb2plY3RzL2RlbW9Qcm9qZWN0L2Zyb250ZW5kIn0=