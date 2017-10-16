webpackHotUpdate(6,{

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = __webpack_require__(407);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(419);

var _axios2 = _interopRequireDefault(_axios);

var _react = __webpack_require__(17);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/pariyar/projects/demoProject/frontend/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pariyar/projects/demoProject/frontend/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4zMWY3OGM2MDE5YjJmMGZhZGMwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MGVhNGIzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICAgIDxoMT5IZWxsbyB3b3JsZDwvaDE+XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+XG4vLyAgICAgPC9kaXY+XG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGluZm9zOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZGF0YScpO1xuICAgIC8vICAgICByZXR1cm4ge2RhdGE6IHJlcy5kYXRhfVxuICAgIC8vICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnLFxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB2YXIgYXBpRGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW5mb3M6IGFwaURhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVEZWxldGUgPSAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgaW5kZXggPSBudWxsO1xuICAgICAgICB2YXIgaW5mb3NBcnJheSA9IHRoaXMuc3RhdGUuaW5mb3M7XG4gICAgICAgIGluZm9zQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudC5lbWFpbCA9PT0gZGF0YS5lbWFpbCl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvJyArIGluZGV4LFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgICBpbmZvc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmZvczogaW5mb3NBcnJheSB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHZhciBkYXRhcyA9IHRoaXMuc3RhdGUuaW5mb3M7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkZFBhZ2VcIj48YT5BZGQgbmV3PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2JvcmRlcjogXCJzb2xpZCAyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtkYXRhcy5tYXAoKGRhdGEpID0+IFxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtkYXRhLmVtYWlsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5mTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmxOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGlkPXtkYXRhLmVtYWlsfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZShkYXRhKX0+RGVsZXRlPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQTNDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7O0FBR0E7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUdBO0FBRkE7QUFOQTtBQVNBO0FBRUE7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBREE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=