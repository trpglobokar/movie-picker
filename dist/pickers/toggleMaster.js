"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  height: 100vh;\n  overflow: scroll;\n  background-color: white;\n  box-shadow: 0px 0px 20px #00000057;\n  padding: 16px;\n"], ["\n  height: 100vh;\n  overflow: scroll;\n  background-color: white;\n  box-shadow: 0px 0px 20px #00000057;\n  padding: 16px;\n"]);
//import ToggleSeenBy from "./pickers/toggleSeenBy"


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ratingSelector = require("./ratingSelector");

var _ratingSelector2 = _interopRequireDefault(_ratingSelector);

var _toggleGenre = require("./toggleGenre");

var _toggleGenre2 = _interopRequireDefault(_toggleGenre);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerWrapper = _styledComponents2.default.div(_templateObject);

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.setGenre = function (event) {
      var toggleBy = event.currentTarget.value;

      var newGenres = _this.props.selectedGenres;
      if (newGenres.includes(toggleBy)) {
        newGenres = newGenres.filter(function (g) {
          return g !== toggleBy;
        });
      } else {
        newGenres.push(toggleBy);
      }

      _this.props.updateSelections(newGenres, _this.props.selectedRating);
    }, _this.setRating = function (newRating) {
      _this.props.updateSelections(_this.props.selectedGenres, newRating);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}

    /*toggleSeenBy = event => {
      const toggleBy = event.currentTarget.value
       let currentSeenBy = this.state.seenBy
       if (currentSeenBy.includes(toggleBy)) {
        currentSeenBy = currentSeenBy.filter(csb => csb !== toggleBy)
      } else {
        currentSeenBy.push(toggleBy)
      }
       let filteredMovies = this.state.movies.filter(movie =>
        currentSeenBy.includes(movie.seenBy)
      )
       this.setState({ seenBy: currentSeenBy, filteredMovies: filteredMovies })
    }*/

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        PickerWrapper,
        null,
        _react2.default.createElement(_ratingSelector2.default, {
          selectedRating: this.props.selectedRating,
          setRating: this.setRating
        }),
        _react2.default.createElement(_toggleGenre2.default, {
          selectedGenres: this.props.selectedGenres,
          toggleGenre: this.setGenre
        })
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;