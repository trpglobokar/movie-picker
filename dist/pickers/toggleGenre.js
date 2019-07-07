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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormLabel = require('@material-ui/core/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('@material-ui/core/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _movieGenres = require('../static-json/movieGenres.json');

var _movieGenres2 = _interopRequireDefault(_movieGenres);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleSeenBy = function (_Component) {
  (0, _inherits3.default)(ToggleSeenBy, _Component);

  function ToggleSeenBy() {
    (0, _classCallCheck3.default)(this, ToggleSeenBy);
    return (0, _possibleConstructorReturn3.default)(this, (ToggleSeenBy.__proto__ || (0, _getPrototypeOf2.default)(ToggleSeenBy)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToggleSeenBy, [{
    key: 'renderFormGroup',
    value: function renderFormGroup() {
      var _this2 = this;

      var peepsInvolved = _movieGenres2.default.genres;

      var jones = peepsInvolved.map(function (peep) {

        return _react2.default.createElement(_FormControlLabel2.default, {
          key: peep.id,
          control: _react2.default.createElement(_Checkbox2.default, {
            checked: _this2.props.selectedGenres.includes(peep.id.toString()),
            onChange: _this2.props.toggleGenre,
            value: peep.id.toString()
          }),
          label: peep.name
        });
      });

      return _react2.default.createElement(
        _FormGroup2.default,
        null,
        jones
      );
    }
  }, {
    key: 'render',
    value: function render() {
      console.log("this.props", this.props);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _FormControl2.default,
          { component: 'fieldset' },
          _react2.default.createElement(
            _FormLabel2.default,
            { component: 'legend' },
            'Genres'
          ),
          this.renderFormGroup()
        )
      );
    }
  }]);
  return ToggleSeenBy;
}(_react.Component);

exports.default = ToggleSeenBy;