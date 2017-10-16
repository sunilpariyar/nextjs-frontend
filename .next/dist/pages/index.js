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

var _jsxFileName = '/home/pariyar/projects/demoProject/frontend/pages/index.js?entry';


// export default () => (
//     <div>
//         <h1>Hello world</h1>
//         <Link href="/about"><a>About</a></Link>
//     </div>
// );

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

        _this.handleDelete = function (data) {
            var index = null;
            var infosArray = _this.state.infos;
            infosArray.forEach(function (element, i) {
                if (element.email === data.email) {
                    index = i;
                }
            });

            (0, _axios2.default)({
                method: 'delete',
                url: 'http://localhost:8000/' + index

            });

            console.log(index);
            infosArray.splice(index, 1);
            _this.setState({ infos: infosArray });
        };

        _this.state = {
            infos: []
        };
        return _this;
    }

    // static async getInitialProps() {
    //     const res = await axios.get('http://localhost:8000/data');
    //     return {data: res.data}
    //   }

    (0, _createClass3.default)(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var that = this;
            (0, _axios2.default)({
                url: 'http://localhost:8000',
                method: 'get'
            }).then(function (result) {
                var apiData = result.data;
                that.setState({
                    infos: apiData
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var datas = this.state.infos;
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_link2.default, { href: '/addPage', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Add new')), _react2.default.createElement('table', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('tr', { style: { border: "solid 2" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'First Name'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Last Name'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'Email'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Action'))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, datas.map(function (data) {
                return _react2.default.createElement('tr', { key: data.email, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                    }
                }, _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                    }
                }, data.fName), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                }, data.lName), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                }, data.email), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                }, _react2.default.createElement('button', { id: data.email, onClick: function onClick() {
                        return _this2.handleDelete(data);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                }, 'Delete')));
            }))));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJheGlvcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQXBwIiwiaGFuZGxlRGVsZXRlIiwiZGF0YSIsImluZGV4IiwiaW5mb3NBcnJheSIsInN0YXRlIiwiaW5mb3MiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJlbWFpbCIsIm1ldGhvZCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpY2UiLCJzZXRTdGF0ZSIsInRoYXQiLCJ0aGVuIiwicmVzdWx0IiwiYXBpRGF0YSIsImNhdGNoIiwiZXJyb3IiLCJkYXRhcyIsImJvcmRlciIsIm1hcCIsImZOYW1lIiwibE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7Ozs7OztBQUdoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0ksQUFFcUI7aUNBQ2pCOzttQkFBYTs0Q0FBQTs7OEhBQUE7O2NBQUEsQUEyQmIsZUFBZSxVQUFBLEFBQUMsTUFBUyxBQUNyQjtnQkFBSSxRQUFKLEFBQVksQUFDWjtnQkFBSSxhQUFhLE1BQUEsQUFBSyxNQUF0QixBQUE0QixBQUM1Qjt1QkFBQSxBQUFXLFFBQVEsVUFBQSxBQUFDLFNBQUQsQUFBVSxHQUFNLEFBQy9CO29CQUFHLFFBQUEsQUFBUSxVQUFVLEtBQXJCLEFBQTBCLE9BQU0sQUFDNUI7NEJBQUEsQUFBUSxBQUNYO0FBQ0o7QUFKRCxBQU1BOzs7d0JBQU0sQUFDTSxBQUNSO3FCQUFLLDJCQUZULEFBQU0sQUFFOEIsQUFLcEM7O0FBUE0sQUFDRjs7b0JBTUosQUFBUSxJQUFSLEFBQVksQUFDWjt1QkFBQSxBQUFXLE9BQVgsQUFBa0IsT0FBbEIsQUFBeUIsQUFDekI7a0JBQUEsQUFBSyxTQUFTLEVBQUUsT0FBaEIsQUFBYyxBQUFTLEFBRTFCO0FBL0NZLEFBRVQ7O2NBQUEsQUFBSzttQkFGSSxBQUVULEFBQWEsQUFDRjtBQURFLEFBQ1Q7ZUFFUDtBQUVEOztBQUNBO0FBQ0E7QUFDQTs7Ozs7NENBRW9CLEFBQ2hCO2dCQUFNLE9BQU4sQUFBYSxBQUNiOztxQkFBTSxBQUNHLEFBQ0w7d0JBRkosQUFBTSxBQUVNO0FBRk4sQUFDRixlQURKLEFBR0csS0FBSyxVQUFBLEFBQUMsUUFBVyxBQUNoQjtvQkFBSSxVQUFVLE9BQWQsQUFBcUIsQUFDckI7cUJBQUEsQUFBSzsyQkFBTCxBQUFjLEFBQ0gsQUFFZDtBQUhpQixBQUNWO0FBTlIsZUFBQSxBQVFHLE1BQU0sVUFBQSxBQUFVLE9BQU8sQUFDdEI7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQVZELEFBV0g7Ozs7aUNBd0JPO3lCQUNKOztnQkFBSSxRQUFRLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2QjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQXNCO0FBQXRCOytCQUFzQixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEdEIsQUFDQSxBQUFzQixBQUN0Qiw2QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBLFFBQUksT0FBTyxFQUFDLFFBQVosQUFBVyxBQUFTOzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSw4QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTlosQUFDSSxBQUNJLEFBSUksQUFHUiw2QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNDO0FBREQ7QUFBQSxxQkFDQyxBQUFNLElBQUksVUFBQSxBQUFDLE1BQUQ7dUNBQ1AsY0FBQSxRQUFJLEtBQUssS0FBVCxBQUFjO2tDQUFkO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSx3QkFESixBQUNJLEFBQVUsQUFDVix3QkFBQSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSx3QkFGSixBQUVJLEFBQVUsQUFDVix3QkFBQSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSx3QkFISixBQUdJLEFBQVUsQUFDVix3QkFBQSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFJO0FBQUo7QUFBQSxtQ0FBSSxjQUFBLFlBQVEsSUFBSSxLQUFaLEFBQWlCLE9BQU8sU0FBUyxtQkFBQTsrQkFBTSxPQUFBLEFBQUssYUFBWCxBQUFNLEFBQWtCO0FBQXpEO2tDQUFBO29DQUFBO0FBQUE7bUJBTEQsQUFDUCxBQUlJLEFBQUk7QUFsQnBCLEFBQ0ksQUFFQSxBQVNJLEFBQ0MsQUFZWjs7Ozs7QUE3RTRCLEE7O2tCQUFaLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFyaXlhci9wcm9qZWN0cy9kZW1vUHJvamVjdC9mcm9udGVuZCJ9