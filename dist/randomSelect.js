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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n"], ["\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 8px;\n"], ["\n  margin: 8px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DialogTitle = require("@material-ui/core/DialogTitle");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _Dialog = require("@material-ui/core/Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Delete = require("@material-ui/icons/Delete");

var _Delete2 = _interopRequireDefault(_Delete);

var _Modal = require("@material-ui/core/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Fab = require("@material-ui/core/Fab");

var _Fab2 = _interopRequireDefault(_Fab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BobsBurgers = _styledComponents2.default.div(_templateObject);

var SuperFab = (0, _styledComponents2.default)(_Fab2.default)(_templateObject2);

var SuperButton = (0, _styledComponents2.default)(_Button2.default)(_templateObject3);

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.handleClick = function (event) {
      var movies = _this.props.filteredMovies;

      var newMovie = movies[Math.floor(Math.random() * Math.floor(movies.length))];

      _this.setState({
        recommendedMovie: newMovie,
        modalOpen: true
      });
    };

    _this.handleClose = function (event) {
      _this.setState({
        recommendedMovie: "",
        modalOpen: false
      });
    };

    _this.state = {
      recommendedMovie: "",
      modalOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        BobsBurgers,
        null,
        _react2.default.createElement(
          SuperFab,
          {
            color: "primary",
            variant: "extended",
            "aria-label": "Choose for Me",
            onClick: this.handleClick
          },
          "Choose for Me"
        ),
        _react2.default.createElement(
          _Dialog2.default,
          {
            onClose: this.handleClose,
            "aria-labelledby": "simple-dialog-title",
            open: this.state.modalOpen
          },
          _react2.default.createElement(
            _DialogTitle2.default,
            { id: "simple-dialog-title" },
            "Recommended Movie: ",
            this.state.recommendedMovie.title
          ),
          _react2.default.createElement(
            "div",
            {
              style: {
                minWidth: "500px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "8px"
              }
            },
            _react2.default.createElement("div", {
              style: {
                height: "400px",
                width: "320px",
                backgroundImage: "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" + this.state.recommendedMovie.poster_path + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }
            }),
            _react2.default.createElement(
              SuperButton,
              {
                variant: "contained",
                color: "primary",
                onClick: this.handleClick
              },
              "Give me another"
            )
          )
        )
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;