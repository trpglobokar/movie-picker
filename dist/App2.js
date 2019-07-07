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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviePicker2 = function (_React$Component) {
  (0, _inherits3.default)(MoviePicker2, _React$Component);

  function MoviePicker2(props) {
    (0, _classCallCheck3.default)(this, MoviePicker2);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MoviePicker2.__proto__ || (0, _getPrototypeOf2.default)(MoviePicker2)).call(this, props));

    _this.state = {
      isLoaded: false,
      recommendedMovie: "",
      seenBy: ["Jake", "Rocky"],
      selectedGenres: [],
      selectedRating: 1,
      movies: [],
      filteredMovies: []
    };
    return _this;
  }

  (0, _createClass3.default)(MoviePicker2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var totalMovies = [];

      this.setState({
        isLoaded: true,
        movies: totalMovies,
        filteredMovies: totalMovies
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isLoaded) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading..."
        );
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "h2",
            null,
            "Movie List"
          ),
          _react2.default.createElement(
            _Button2.default,
            null,
            "Give me another"
          )
        )
      );
    }
  }]);
  return MoviePicker2;
}(_react2.default.Component);

exports.default = MoviePicker2;