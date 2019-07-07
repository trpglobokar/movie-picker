"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  background: #7ec5b4;\n  height: 100vh;\n"], ["\n  background: #7ec5b4;\n  height: 100vh;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 32px;\n  max-height: calc(100vh - 64px);\n  overflow: scroll;\n"], ["\n  margin: 32px;\n  max-height: calc(100vh - 64px);\n  overflow: scroll;\n"]);
//import { withStyles } from "@material-ui/core/styles"


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = require("@material-ui/core/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _allmovies = require("./allmovies");

var _allmovies2 = _interopRequireDefault(_allmovies);

var _toggleMaster = require("./pickers/toggleMaster");

var _toggleMaster2 = _interopRequireDefault(_toggleMaster);

require("./App.css");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _randomSelect = require("./randomSelect");

var _randomSelect2 = _interopRequireDefault(_randomSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = _styledComponents2.default.div(_templateObject);

var MovieListWrapper = _styledComponents2.default.div(_templateObject2);

/*const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
})*/

var MoviePicker = function (_React$Component) {
  (0, _inherits3.default)(MoviePicker, _React$Component);

  //export default function MoviePicker() {
  function MoviePicker(props) {
    (0, _classCallCheck3.default)(this, MoviePicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MoviePicker.__proto__ || (0, _getPrototypeOf2.default)(MoviePicker)).call(this, props));

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

  (0, _createClass3.default)(MoviePicker, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var totalMovies, url, response, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                totalMovies = [];
                url = "https://api.themoviedb.org/4/list/108073?api_key=43a2c46891bb2b3bb8fccd7b04ce1f02&language=en-US";
                _context.next = 4;
                return fetch(url);

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                json = _context.sent;

                totalMovies = totalMovies.concat(json.results);
                this.setState({
                  isLoaded: true,
                  movies: totalMovies,
                  filteredMovies: totalMovies
                });

                //console.log("json", json)

                //TODO: find another non-fetch, and/or something that works with npm packages/modules/whatever they're called, i cant think in words right now

                //TODO: make this looped, not hardcoded
                /*fetch(url, {
                  method: 'get',
                }).then(function(response) {
                  return response.json(); // pass the data as promise to next then block
                }).then(function(data) {
                  totalMovies = totalMovies.concat(data.results)
                  return fetch(url+"&page=2")
                })
                .then(function(response) {
                  return response.json();
                })
                .then(function(data) {
                  totalMovies = totalMovies.concat(data.results)
                  this2.setState({
                    isLoaded: true,
                    movies: totalMovies,
                    filteredMovies: totalMovies
                  })
                })
                .catch(function(error) {
                  console.log('Request failed', error)
                })*/

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "filterDaMovies",
    value: function filterDaMovies(selectedGenres, selectedRating) {
      var movies = this.state.movies.filter(function (movie) {
        return movie.vote_average > selectedRating;
      }).filter(function (movie) {
        return selectedGenres.every(function (genre) {
          return movie.genre_ids.includes(parseInt(genre));
        });
      });
      return movies;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.isLoaded) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading..."
        );
      }

      return _react2.default.createElement(
        AppContainer,
        null,
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 16 },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 4 },
            _react2.default.createElement(_toggleMaster2.default, {
              selectedRating: this.state.selectedRating,
              selectedGenres: this.state.selectedGenres,
              updateSelections: function updateSelections(selectedGenres, selectedRating) {
                var filteredMovies = _this2.filterDaMovies(selectedGenres, selectedRating);

                _this2.setState({
                  selectedGenres: selectedGenres,
                  selectedRating: selectedRating,
                  filteredMovies: filteredMovies
                });
              }
            })
          ),
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 8 },
            _react2.default.createElement(
              MovieListWrapper,
              null,
              _react2.default.createElement(
                "h2",
                null,
                "Movie List"
              ),
              _react2.default.createElement(
                _Paper2.default,
                null,
                _react2.default.createElement(_allmovies2.default, { movies: this.state.filteredMovies })
              )
            )
          )
        ),
        _react2.default.createElement(_randomSelect2.default, {
          filteredMovies: this.state.filteredMovies
        })
      );
    }
  }]);
  return MoviePicker;
}(_react2.default.Component);

exports.default = MoviePicker;

//export default withStyles(styles)(MoviePicker)