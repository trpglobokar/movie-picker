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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 100%;\n  overflow: scroll;\n'], ['\n  height: 100%;\n  overflow: scroll;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _ListItemAvatar = require('@material-ui/core/ListItemAvatar');

var _ListItemAvatar2 = _interopRequireDefault(_ListItemAvatar);

var _Avatar = require('@material-ui/core/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _movieGenres = require('../static/movieGenres.json');

var _movieGenres2 = _interopRequireDefault(_movieGenres);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListCaptain = (0, _styledComponents2.default)(_List2.default)(_templateObject);

var AllMovies = function (_Component) {
  (0, _inherits3.default)(AllMovies, _Component);

  function AllMovies() {
    (0, _classCallCheck3.default)(this, AllMovies);
    return (0, _possibleConstructorReturn3.default)(this, (AllMovies.__proto__ || (0, _getPrototypeOf2.default)(AllMovies)).apply(this, arguments));
  }

  (0, _createClass3.default)(AllMovies, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        ListCaptain,
        null,
        this.props.movies.map(function (movie) {
          var genreIDs = movie.genre_ids;
          var genreNames = genreIDs.map(function (id) {
            return _movieGenres2.default.genres.find(function (genre) {
              return genre.id === id;
            }).name;
          });

          return _react2.default.createElement(
            _ListItem2.default,
            { key: movie.id, alignItems: 'flex-start' },
            _react2.default.createElement(
              _ListItemAvatar2.default,
              null,
              _react2.default.createElement(_Avatar2.default, { src: "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.backdrop_path })
            ),
            _react2.default.createElement(_ListItemText2.default, {
              primary: movie.title,
              secondary: genreNames.join(", ")
            })
          );
        })
      );
    }
  }]);
  return AllMovies;
}(_react.Component);

exports.default = AllMovies;